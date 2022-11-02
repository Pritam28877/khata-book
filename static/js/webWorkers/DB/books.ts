// helpers
import 'indexeddb-getall-shim';
import { getDB } from './base';

// constants
import { STORES, BOOK_INDEX } from './constants';

// defs
import { IBookStore } from './types';

/**
 * Get All the Books
 */
export const getBooks = async () => {
  const db = await getDB();
  return db.getAll(STORES.BOOKS);
};

/**
 * Get Single Book
 * @param {string} bookId
 */
export const getBook = async (bookId: string) => {
  const db = await getDB();

  return db.get(STORES.BOOKS, bookId);
};

/**
 * Get all dirty books
 */
export const getDirtyBooks = async () => {
  const db = await getDB();
  return db.getAllFromIndex(
    STORES.BOOKS,
    BOOK_INDEX.DIRTY,
    IDBKeyRange.bound([1], [1])
  );
};

/**
 * Add Single Book
 * @param {IBookStore['value']} book
 */
export const addBook = async (book: IBookStore['value']) => {
  const db = await getDB();
  return db.add(STORES.BOOKS, book);
};

/**
 * Add multiple books
 * @param {IBookStore['value'][]} books
 */
export const addBooks = async (books: IBookStore['value'][]) => {
  const db = await getDB();

  const tx = db.transaction(STORES.BOOKS, 'readwrite');

  const promises = books.map((book) => tx.store.add(book));

  return Promise.all<IDBValidKey | void>([...promises, tx.done]);
};

/**
 * Update single book
 * @param {IBookStore['value']} book
 */
export const updateBook = async (book: IBookStore['value']) => {
  const db = await getDB();
  const tx = db.transaction(STORES.BOOKS, 'readwrite');
  tx.store.put(book);
};

/**
 * update multiple books
 * @param {IBookStore['value'][]} books
 */
export const updateBooks = async (books: IBookStore['value'][]) => {
  const db = await getDB();
  const tx = db.transaction(STORES.BOOKS, 'readwrite');

  const promises = books.map((book) => tx.store.put(book));

  return Promise.all<IDBValidKey | void>([...promises, tx.done]);
};
