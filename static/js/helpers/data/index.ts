// constants
import { STORAGE_CURRENT_BOOK_KEY } from 'src/constants/data';
import { updateBooks } from 'src/webWorkers/DB/books';

// defs
import { IBookValue } from 'src/webWorkers/DB/types';

import { getBook } from '@webWorkers/DB/books';

export const getCurrentBook = (): IBookValue | null => {
  const bookData = window.localStorage.getItem(STORAGE_CURRENT_BOOK_KEY);

  if (bookData === null) {
    return null;
  }

  try {
    return JSON.parse(bookData);
  } catch (e) {
    return null;
    /** TODO - add exception */
  }
};

export const saveCurrentBook = (book: IBookValue) => {
  updateBooks([book]);
  window.localStorage.setItem(STORAGE_CURRENT_BOOK_KEY, JSON.stringify(book));
};

export const clearCurrentBook = () =>
  window.localStorage.removeItem(STORAGE_CURRENT_BOOK_KEY);

export const getCurrentStoredBook = async () => {
  const localBook = getCurrentBook();
  if (localBook) {
    return await getBook(localBook.book_id);
  }
  return localBook;
};
