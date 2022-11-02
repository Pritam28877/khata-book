// helpers
import 'indexeddb-getall-shim';
import { getDB } from './base';
import { getBook } from './books';
import { getCustomer } from './customers';

// constants
import { STORES, TRANSACTION_INDEX } from './constants';

// defs
import { ITransactionStore, IDeletedTransactionValue } from './types';

export const getTransaction = async (transactionId: string) => {
  const db = await getDB();
  return db.get(STORES.TRANSACTION, transactionId);
};

/**
 * Get transaction count of a customer
 * @param {string} bookId
 * @param {string} customerId
 */
export const getTransactionCount = async (
  bookId: string,
  customerId: string
) => {
  const db = await getDB();
  return db.countFromIndex(
    STORES.TRANSACTION,
    TRANSACTION_INDEX.CUSTOMER,
    IDBKeyRange.bound([bookId, customerId, 0], [bookId, customerId, 0, []])
  );
};

interface IGetTransactionsArgs {
  bookId: string;
  customerId: string;
  lastTransactionId?: string;
  limit?: number;
}

export const getTransactions = async ({
  bookId,
  customerId,
  lastTransactionId,
  limit = 100,
}: IGetTransactionsArgs) => {
  const transactionCount = await getTransactionCount(bookId, customerId);

  if (transactionCount === 0) {
    return {
      count: 0,
      data: [],
    };
  }

  let lastTransaction: ITransactionStore['value'] | undefined;
  if (lastTransactionId !== undefined) {
    lastTransaction = await getTransaction(lastTransactionId);
  }

  const db = await getDB();
  const tx = db.transaction(STORES.TRANSACTION, 'readonly');

  const index = tx.store.index(TRANSACTION_INDEX.CUSTOMER);
  let cursor = await index.openCursor(
    IDBKeyRange.bound([bookId, customerId, 0], [bookId, customerId, 0, []]),
    'prev'
  );

  const cursorContinue = async () => {
    if (cursor === null) {
      return;
    }
    cursor = await cursor.continue();
  };

  // using last indexKey to skip to the start of record
  if (cursor !== null && lastTransaction !== undefined) {
    if (cursor.value.transaction_id === lastTransaction.transaction_id) {
      await cursorContinue();
    }

    const lastTransactionIndexKey = [
      bookId,
      customerId,
      0,
      lastTransaction.sortDate,
    ];

    cursor = await cursor.continuePrimaryKey(
      // @ts-ignore
      lastTransactionIndexKey,
      lastTransaction.transaction_id
    );
    await cursorContinue();
  }

  const data = [];

  let canLoop = cursor !== null && Boolean(cursor);
  while (canLoop) {
    if (cursor === null) {
      canLoop = false;
      continue;
    }

    data.push({ ...cursor.value });

    if (data.length >= limit) {
      break;
    }

    await cursorContinue();
  }

  return { count: transactionCount, data };
};

/**
 * Get all dirty transactions
 */
export const getDirtyTransactions = async () => {
  const db = await getDB();
  return db.getAllFromIndex(
    STORES.TRANSACTION,
    TRANSACTION_INDEX.DIRTY,
    IDBKeyRange.bound([1], [1])
  );
};

/**
 * Get all dirty attachment transactions
 */
export const getDirtyAttachmentTransactions = async () => {
  const db = await getDB();
  return db.getAllFromIndex(
    STORES.TRANSACTION,
    TRANSACTION_INDEX.ATTACHMENT_DIRTY,
    IDBKeyRange.bound([1], [1])
  );
};

/**
 * Add single transaction
 * @param {ITransactionStore['value']} transaction
 */
export const addTransaction = async (
  transaction: ITransactionStore['value']
) => {
  const db = await getDB();
  return db.add(STORES.TRANSACTION, transaction);
};

/**
 * Add multiple transactions
 * @param {ITransactionStore['value'][]} transactions
 */
export const addTransactions = async (
  transactions: ITransactionStore['value'][]
) => {
  const db = await getDB();

  const tx = db.transaction(STORES.TRANSACTION, 'readwrite');

  const promises = transactions.map((transaction) => tx.store.add(transaction));

  return Promise.all<IDBValidKey | void>([...promises, tx.done]);
};

/**
 * Update single transaction
 * @param {ITransactionStore['value']} transaction
 */
export const updateTransaction = async (
  transaction: ITransactionStore['value']
) => {
  const db = await getDB();
  return db.put(STORES.TRANSACTION, transaction);
};

/**
 * update multiple transactions
 * @param {ITransactionStore['value'][]} transactions
 */
export const updateTransactions = async (
  transactions: ITransactionStore['value'][]
) => {
  const db = await getDB();
  const tx = db.transaction(STORES.TRANSACTION, 'readwrite');

  const promises = transactions.map((transaction) => tx.store.put(transaction));

  return Promise.all<IDBValidKey | void>([...promises, tx.done]);
};

interface IGetRunningBalanceArgs {
  bookId: string;
  customerId: string;
  fromTransactionId?: string;
}

export const getRunningBalance = async ({
  bookId,
  customerId,
  fromTransactionId,
}: IGetRunningBalanceArgs) => {
  let fromTransaction;
  if (fromTransactionId !== undefined) {
    fromTransaction = await getTransaction(fromTransactionId);
  }

  const db = await getDB();
  const tx = db.transaction(STORES.TRANSACTION, 'readonly');

  const index = tx.store.index(TRANSACTION_INDEX.CUSTOMER);
  let cursor = await index.openCursor(
    IDBKeyRange.bound([bookId, customerId, 0], [bookId, customerId, 0, []]),
    'prev'
  );

  if (cursor === null) {
    return 0;
  }

  if (fromTransaction !== undefined) {
    const fromTransactionIndexKey = [
      bookId,
      customerId,
      0,
      fromTransaction.sortDate,
    ];

    if (cursor.value.transaction_id !== fromTransaction.transaction_id) {
      cursor = await cursor.continuePrimaryKey(
        // @ts-ignore
        fromTransactionIndexKey,
        fromTransaction.transaction_id
      );
    }
  }

  const cursorContinue = async () => {
    if (cursor === null) {
      return;
    }
    cursor = await cursor.continue();
  };

  let runningBalance = 0;

  let canLoop = true;
  while (canLoop) {
    if (cursor === null) {
      canLoop = false;
      continue;
    }

    runningBalance = runningBalance + cursor.value.amount;

    await cursorContinue();
  }

  return runningBalance;
};

/**
 * Get all deleted transactions
 *
 */
export const getDeletedTransactions = async () => {
  const db = await getDB();

  const allTransactions = await db.getAll(STORES.TRANSACTION);

  let deletedTransactions: IDeletedTransactionValue[] = [];

  for (const transaction of allTransactions) {
    if (transaction.deleted === 1) {
      const book = await getBook(transaction.book_id);
      const customer = await getCustomer(transaction.customer_id);
      if (book && customer) {
        deletedTransactions.push({
          ...transaction,
          customer_name: customer.name,
          book_name: book.business_name,
        });
      }
    }
  }
  // sort by last updated
  deletedTransactions = deletedTransactions.sort(
    (t1, t2) => Number(t2.updated_at) - Number(t1.updated_at)
  );
  return { data: deletedTransactions };
};
