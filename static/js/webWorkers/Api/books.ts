import { IBookValue } from './../DB/types';
// helpers
import { setFetchHeaders } from 'src/helpers/api';
import { isEmptyValues } from 'src/helpers/utils';
import { generateUUID, getCurrentTime } from './helpers';

// db
import {
  addBook as addBookDB,
  getBook as getBookDB,
  getBooks as getBooksDB,
  updateBook as updateBookDB,
} from 'src/webWorkers/DB/books';

// api
import { pushBooks } from 'src/api/book';
import { upload } from 'src/api/file';

// defs
import { IDevice, IUser } from 'src/types/user';
import { IBook } from 'src/types/db';

interface IAttachment {
  file: Blob;
  fileName: string;
}

interface IAddBookProps {
  bookName: string;
  user: IUser;
  deviceInfo?: IDevice;
}

interface IUpdateBookProps {
  user: IUser;
  deviceInfo: IDevice;
  bookId: string;
  bookName: string;
  imageFile?: IAttachment | undefined;
  image?: string;
  businessOwnerName?: string;
}

export const addBook = async ({
  bookName,
  user,
  deviceInfo,
}: IAddBookProps) => {
  if (isEmptyValues(bookName)) {
    return Promise.reject('Invalid Book Name');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo?.token;

  token && setFetchHeaders({ 'x-khatabook-token': token });

  const bookId = generateUUID();

  const bookRemote = {
    book_id: bookId,
    owner_id: user.user_id,
    business_name: bookName,
    business_tag_line: null,
    business_phone: null,
    business_address: null,
    business_email: null,
    business_image: null,
    enable_sms_alerts: 1,
    language: -1,
    created_at: String(getCurrentTime()),
    created_by_user: user.user_id,
    created_by_device: deviceInfo?.device_id || '',
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo?.device_id || '',
    deleted: 0,
    book_type: 0,
    book_name: bookName,
    enable_txn_detail_sharing: null,
    rzp_contact_id: null,
    business_category_id: null,
    business_category_text: null,
  };

  const book = {
    ...bookRemote,
    dirty: 1,
  };

  try {
    // add in local DB

    await addBookDB(book);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }

  try {
    // dont wait for API calls

    pushBooks([bookRemote]).then(async () => {
      const localBook = await getBookDB(bookId);

      if (localBook === undefined) {
        return;
      }

      await updateBookDB({
        ...localBook,
        dirty: 0,
      });
    });
  } catch (e) {
    if (e?.status === 401) {
      // TODO - do something so that we can ask user to login
      // before next action
    }

    /** if remote API calls fail do nothing, we can sync later */
  }

  return book;
};

export const updateBook = async ({
  bookId,
  bookName,
  businessOwnerName,
  imageFile,
  image,
  user,
  deviceInfo,
}: IUpdateBookProps) => {
  let s3Url;
  if (isEmptyValues(bookName)) {
    return Promise.reject('Invalid Book Name');
  }
  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const bookRemote = (await getBookDB(bookId)) as IBook;

  if (bookRemote === undefined) {
    return Promise.reject('Book not found');
  }

  if (imageFile !== undefined) {
    s3Url = await uploadImage(imageFile, user.user_id)
      .then((url) => {
        return url;
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  }

  bookRemote.book_id = bookId;
  bookRemote.business_name = bookName;
  bookRemote.business_owner_name = businessOwnerName;
  bookRemote.book_name = bookName;
  bookRemote.business_image = s3Url || image;
  bookRemote.updated_at = String(getCurrentTime());
  bookRemote.updated_by_user = user.user_id;
  bookRemote.updated_by_device = deviceInfo.device_id;

  const book = {
    ...bookRemote,
    dirty: 1,
  };

  try {
    // add in local DB
    await updateBookDB(book);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }

  try {
    // dont wait for API calls
    pushBooks([bookRemote]).then(async () => {
      const localBook = await getBookDB(bookId);

      if (localBook === undefined) {
        return;
      }

      await updateBookDB({
        ...localBook,
        dirty: 0,
      });
    });
  } catch (e) {
    if (e?.status === 401) {
      // TODO - do something so that we can ask user to login
      // before next action
    }

    /** if remote API calls fail do nothing, we can sync later */
  }

  return book;
};

interface IDeleteBookArgs {
  bookId: string;
  user: IUser;
  deviceInfo: IDevice;
}

export const deleteBook = async ({
  bookId,
  user,
  deviceInfo,
}: IDeleteBookArgs) => {
  if (bookId === undefined) {
    return Promise.reject('Invalid Book Id');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const localBook = await getBookDB(bookId);

  if (localBook === undefined) {
    return Promise.reject('Book not found');
  }

  const bookRemote = {
    ...localBook,
    deleted: 1,
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
  };

  const book = {
    ...bookRemote,
    dirty: 1,
  };

  try {
    // update in local DB
    await updateBookDB(book);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }
  if (localBook) {
    try {
      // dont wait for API calls
      pushBooks([bookRemote]).then(async () => {
        if (localBook === undefined) {
          return;
        }
        // @ts-ignore
        await updateBookDB({
          ...localBook,
          ...bookRemote,
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  } else {
    try {
      // dont wait for API calls
      pushBooks([bookRemote]).then(async () => {
        if (localBook === undefined) {
          return;
        }
        // @ts-ignore
        await updateBookDB({
          ...(localBook as object),
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  }

  return book as IBookValue;
};

export const restoreBook = async ({
  bookId,
  user,
  deviceInfo,
}: IDeleteBookArgs) => {
  if (bookId === undefined) {
    return Promise.reject('Invalid Book Id');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const localBook = await getBookDB(bookId);

  if (localBook === undefined) {
    return Promise.reject('Book not found');
  }

  const bookRemote = {
    ...localBook,
    deleted: 0,
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
  };

  const book = {
    ...bookRemote,
    dirty: 1,
  };

  try {
    // update in local DB
    await updateBookDB(book);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }
  if (localBook) {
    try {
      // dont wait for API calls
      pushBooks([bookRemote]).then(async () => {
        if (localBook === undefined) {
          return;
        }
        // @ts-ignore
        await updateBookDB({
          ...localBook,
          ...bookRemote,
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  } else {
    try {
      // dont wait for API calls
      pushBooks([bookRemote]).then(async () => {
        if (localBook === undefined) {
          return;
        }
        // @ts-ignore
        await updateBookDB({
          ...(localBook as object),
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  }

  return book as IBookValue;
};

const uploadImage = async (attachment: IAttachment, userId: string) => {
  if (!attachment) {
    return '';
  }

  const s3Url = await upload({
    file: attachment.file,
    fileName: attachment.fileName,
    userId,
  });

  return s3Url;
};

/**
 * Get all deleted books
 *
 */

export const getDeletedBooks = async () => {
  const allBooks = await getBooks();
  let deletedBooks = allBooks.filter((book) => book.deleted === 1);
  // sort by last updated
  deletedBooks = deletedBooks.sort(
    (b1, b2) => Number(b2.updated_at) - Number(b1.updated_at)
  );
  return deletedBooks;
};

export const getBooks = getBooksDB;
export const getBook = getBookDB;
