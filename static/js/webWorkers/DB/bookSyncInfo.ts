// helpers
import 'indexeddb-getall-shim';
import { getDB } from './base';

// constants
import { STORES } from './constants';

// defs
import { IBookSyncInfoStore } from './types';

/**
 * Add Book Sync Info
 * @param {IBookSyncInfoStore['value']} bookSyncInfo
 */
export const addBookSyncInfo = async (
  bookSyncInfo: IBookSyncInfoStore['value']
) => {
  const db = await getDB();
  return db.add(STORES.BOOK_SYNC_INFO, bookSyncInfo, bookSyncInfo.book_id);
};

export const getAllBookSyncInfo = async () => {
  const db = await getDB();
  return db.getAll(STORES.BOOK_SYNC_INFO);
};

/**
 * Get Book Sync Info by bookId
 * @param bookId
 */
export const getBookSyncInfo = async (bookId: string) => {
  const db = await getDB();
  return db.get(STORES.BOOK_SYNC_INFO, bookId);
};

/**
 * Update Book Sync Info
 * @param {IBookSyncInfoStore['value']} bookSyncInfo
 */
export const updateBookSyncInfo = async (
  bookSyncInfo: IBookSyncInfoStore['value']
) => {
  const db = await getDB();
  return db.put(STORES.BOOK_SYNC_INFO, bookSyncInfo);
};

/**
 * update multiple bookSyncInfo
 * @param {IBookSyncInfoStore['value'][]} bookSyncInfos
 */
export const updateBookSyncInfoBulk = async (
  bookSyncInfos: IBookSyncInfoStore['value'][]
) => {
  const db = await getDB();
  const tx = db.transaction(STORES.BOOK_SYNC_INFO, 'readwrite');

  const promises = bookSyncInfos.map((bookSyncInfo) =>
    tx.store.put(bookSyncInfo)
  );

  return Promise.all<IDBValidKey | void>([...promises, tx.done]);
};
