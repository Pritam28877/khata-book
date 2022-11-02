// db
import { getDirtyBooks, updateBooks } from 'src/webWorkers/DB/books';
import {
  getDirtyCustomers,
  updateCustomers,
} from 'src/webWorkers/DB/customers';
import {
  getDirtyTransactions,
  getDirtyAttachmentTransactions,
  updateTransaction,
  updateTransactions,
} from 'src/webWorkers/DB/transactions';

// api
import { pushBooks } from 'src/api/book';
import { pushCustomers } from 'src/api/customer';
import { pushTransactions } from 'src/api/transaction';

// helpers
import { uploadLocalAttachments } from './transactionHelper';
import {
  getCustomersByBook,
  getTransactionsByBook,
  chunkArray,
} from './pushDataHelpers';

// defs
import { ICustomerValue, ITransactionValue } from 'src/webWorkers/DB/types';

const MAX_PUSH_LIMIT = 100;

export const pushDirtyData = async (userId: string) => {
  try {
    // NOTE: sequence of request is important
    await pushDirtyBooks();
    await pushDirtyCustomers();
    await pushDirtyAttachments(userId);
    await pushDirtyTransactions();
  } catch (e) {
    return Promise.reject(e);
  }
};

const pushDirtyBooks = async () => {
  const dirtyBooks = await getDirtyBooks();

  if (dirtyBooks.length === 0) {
    return;
  }

  const booksChunk = chunkArray(dirtyBooks, MAX_PUSH_LIMIT);

  let canLoop = true;
  let i = 0;
  while (canLoop) {
    const books = booksChunk[i];
    // push dirty books to server
    await pushBooks(books);
    const pushedBooks = books.map((book) => ({
      ...book,
      dirty: 0,
    }));

    // update local DB
    await updateBooks(pushedBooks);

    i++;
    if (i >= booksChunk.length) {
      canLoop = false;
    }
  }
};

const pushDirtyCustomersByBook = async (
  bookId: string,
  dirtyCustomers: ICustomerValue[]
) => {
  const customersChunk = chunkArray(dirtyCustomers, MAX_PUSH_LIMIT);

  let canLoop = true;
  let i = 0;
  while (canLoop) {
    const customers = customersChunk[i];
    // push dirty customers to server
    await pushCustomers(bookId, customers);
    const pushedCustomers = customers.map((customer) => ({
      ...customer,
      dirty: 0,
    }));

    // update local DB
    await updateCustomers(pushedCustomers);

    i++;
    if (i >= customersChunk.length) {
      canLoop = false;
    }
  }
};

const pushDirtyCustomers = async () => {
  const dirtyCustomers = await getDirtyCustomers();

  if (dirtyCustomers.length === 0) {
    return;
  }

  const customersByBook = getCustomersByBook(dirtyCustomers);

  const bookIds = Object.keys(customersByBook);

  let canLoop = true;
  let i = 0;
  while (canLoop) {
    const bookId = bookIds[i];
    const customers = customersByBook[bookId];
    await pushDirtyCustomersByBook(bookId, customers);

    i++;
    if (i >= bookIds.length) {
      canLoop = false;
    }
  }
};

const pushDirtyAttachments = async (userId: string) => {
  const dirtyAttachmentTransactions = await getDirtyAttachmentTransactions();

  if (dirtyAttachmentTransactions.length === 0) {
    return;
  }

  let canLoop = true;
  let i = 0;
  while (canLoop) {
    const transaction = dirtyAttachmentTransactions[i];
    const { localAttachments = [] } = transaction;
    let uploadedAttachments: string[] = [];

    if (localAttachments && localAttachments?.length > 0) {
      // uploading images to S3
      uploadedAttachments = await uploadLocalAttachments(
        localAttachments,
        userId
      );
    }

    // update local DB
    await updateTransaction({
      ...transaction,
      attachments: uploadedAttachments,
      localAttachments: [],
      hasLocalAttachments: 0,
      dirty: 1,
    });

    i++;
    if (i >= dirtyAttachmentTransactions.length) {
      canLoop = false;
    }
  }
};

const pushDirtyTransactionsByBook = async (
  bookId: string,
  dirtyTransactions: ITransactionValue[]
) => {
  const transactionsChunk = chunkArray(dirtyTransactions, MAX_PUSH_LIMIT);

  let canLoop = true;
  let i = 0;
  while (canLoop) {
    const transactions = transactionsChunk[i];
    // push dirty transactions to server
    await pushTransactions(bookId, transactions);
    const pushedTransactions = transactions.map((transaction) => ({
      ...transaction,
      dirty: 0,
    }));

    // update local DB
    await updateTransactions(pushedTransactions);

    i++;
    if (i >= transactionsChunk.length) {
      canLoop = false;
    }
  }
};

const pushDirtyTransactions = async () => {
  const dirtyTransactions = await getDirtyTransactions();

  if (dirtyTransactions.length === 0) {
    return;
  }

  const transactionsByBook = getTransactionsByBook(dirtyTransactions);

  const bookIds = Object.keys(transactionsByBook);

  let canLoop = true;
  let i = 0;
  while (canLoop) {
    const bookId = bookIds[i];
    const transactions = transactionsByBook[bookId];
    await pushDirtyTransactionsByBook(bookId, transactions);

    i++;
    if (i >= bookIds.length) {
      canLoop = false;
    }
  }
};
