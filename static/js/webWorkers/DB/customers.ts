// libs
import 'indexeddb-getall-shim';
import { IDBPCursorWithValue } from 'idb';
import escapeRegExp from 'lodash.escaperegexp';

// helpers
import { getDB } from './base';
import { getTransaction } from './transactions';
import { getBook } from './books';

// constants
import {
  STORES,
  CUSTOMER_INDEX,
  CUSTOMER_FILTER,
  CUSTOMER_SORT,
  TRANSACTION_INDEX,
} from './constants';
import { CUSTOMERS_LIMIT } from 'src/constants/customers';
import { ICustomerValue, IDeletedCustomerValue } from 'src/webWorkers/DB/types';

// defs
import { ICustomerStore, IKBDB } from './types';

/**
 * Get Single Customer
 * @param {string} customerId
 */
export const getCustomer = async (customerId: string) => {
  const db = await getDB();
  if (STORES.CUSTOMER) {
    return db.get(STORES.CUSTOMER, customerId);
  }
  return undefined;
};

/**
 * Get customer count of a book
 * @param {string} bookId
 */
export const getCustomerCount = async (bookId: string) => {
  const db = await getDB();
  return db.countFromIndex(
    STORES.CUSTOMER,
    CUSTOMER_INDEX.COUNT,
    IDBKeyRange.only([bookId, 0])
  );
};

export const getActiveCustomerBook = async () => {
  const db = await getDB();
  const tx = db.transaction(STORES.CUSTOMER, 'readonly');
  const index = tx.store.index(CUSTOMER_INDEX.ACTIVE_BOOK);

  const cursor = await index.openCursor(
    IDBKeyRange.bound([0], [0, []]),
    'prev'
  );

  if (cursor === null) {
    return undefined;
  }

  return cursor.value.book_id;
};

export interface IGetCustomerArgs {
  bookId: string;
  filterBy?: CUSTOMER_FILTER;
  sortBy?: CUSTOMER_SORT;
  search?: string;
  lastCustomerId?: string;
  limit?: number;
}

/**
 * Get Customers using bookId
 * @param {IGetCustomerArgs} param0
 */
export const getCustomers = async ({
  bookId,
  filterBy = CUSTOMER_FILTER.ALL,
  sortBy = CUSTOMER_SORT.RECENT,
  limit = CUSTOMERS_LIMIT,
  search,
  lastCustomerId,
}: IGetCustomerArgs) => {
  const customerCount = await getCustomerCount(bookId);

  if (customerCount === 0) {
    return {
      count: 0,
      data: [],
    };
  }

  let lastCustomer: ICustomerStore['value'] | undefined;
  let lastCustomerIndexKey: [string, number, number | string] | undefined;
  if (lastCustomerId !== undefined && lastCustomerId) {
    lastCustomer = await getCustomer(lastCustomerId);
  }

  const db = await getDB();
  const tx = db.transaction(STORES.CUSTOMER, 'readonly');
  let cursor: IDBPCursorWithValue<
    IKBDB,
    [STORES.CUSTOMER],
    STORES.CUSTOMER,
    | CUSTOMER_INDEX.TRANSACTION_TIMESTAMP
    | CUSTOMER_INDEX.AMOUNT
    | CUSTOMER_INDEX.NAME
  > | null;

  switch (sortBy) {
    case CUSTOMER_SORT.OLDEST: {
      const index = tx.store.index(CUSTOMER_INDEX.TRANSACTION_TIMESTAMP);
      cursor = await index.openCursor(
        IDBKeyRange.bound([bookId, 0], [bookId, 0, []]),
        'next'
      );
      if (lastCustomer !== undefined) {
        lastCustomerIndexKey = [bookId, 0, lastCustomer.last_transaction_time];
      }
      break;
    }

    case CUSTOMER_SORT.LEAST_AMOUNT: {
      const index = tx.store.index(CUSTOMER_INDEX.AMOUNT);
      cursor = await index.openCursor(
        IDBKeyRange.bound([bookId, 0], [bookId, 0, []]),
        'next'
      );
      if (lastCustomer !== undefined) {
        lastCustomerIndexKey = [bookId, 0, lastCustomer.balance];
      }
      break;
    }

    case CUSTOMER_SORT.NAME: {
      const index = tx.store.index(CUSTOMER_INDEX.NAME);
      cursor = await index.openCursor(
        IDBKeyRange.bound([bookId, 0], [bookId, 0, []])
      );
      if (lastCustomer !== undefined) {
        lastCustomerIndexKey = [bookId, 0, lastCustomer.name];
      }
      break;
    }

    case CUSTOMER_SORT.HIGH_AMOUNT: {
      const index = tx.store.index(CUSTOMER_INDEX.AMOUNT);
      cursor = await index.openCursor(
        IDBKeyRange.bound([bookId, 0], [bookId, 0, []]),
        'prev'
      );
      if (lastCustomer !== undefined) {
        lastCustomerIndexKey = [bookId, 0, lastCustomer.balance];
      }
      break;
    }

    default: {
      const index = tx.store.index(CUSTOMER_INDEX.TRANSACTION_TIMESTAMP);
      cursor = await index.openCursor(
        IDBKeyRange.bound([bookId, 0], [bookId, 0, []]),
        'prev'
      );
      if (lastCustomer !== undefined) {
        lastCustomerIndexKey = [bookId, 0, lastCustomer.last_transaction_time];
      }
      break;
    }
  }

  const searchRegex =
    search !== undefined && search !== ''
      ? new RegExp(escapeRegExp(search), 'i')
      : undefined;

  const data = [];

  let canLoop = cursor !== null && Boolean(cursor);

  const cursorContinue = async () => {
    if (cursor === null) {
      return;
    }
    cursor = await cursor.continue();
  };

  let skippedLastKey = false;
  while (canLoop) {
    if (cursor === null) {
      canLoop = false;
      continue;
    }

    // using last indexKey to skip to the start of record
    if (
      lastCustomerIndexKey !== undefined &&
      lastCustomer !== undefined &&
      skippedLastKey === false
    ) {
      if (cursor.value.customer_id === lastCustomer.customer_id) {
        await cursorContinue();
        skippedLastKey = true;
        continue;
      }

      cursor = await cursor.continuePrimaryKey(
        // @ts-ignore
        lastCustomerIndexKey,
        lastCustomer.customer_id
      );
      await cursorContinue();
      skippedLastKey = true;
      continue;
    }

    const row = { ...cursor.value };

    switch (filterBy) {
      // skip customers whose balance is less than 1
      case CUSTOMER_FILTER.PAYABLES: {
        if (row.balance < 1) {
          await cursorContinue();
          continue;
        }
        break;
      }

      // show customers whose balance is greater than 0
      case CUSTOMER_FILTER.RECEIVABLES: {
        if (row.balance >= 0) {
          await cursorContinue();
          continue;
        }
        break;
      }

      // show customers whose balance is 0
      case CUSTOMER_FILTER.SETTLED: {
        if (row.balance !== 0) {
          await cursorContinue();
          continue;
        }
        break;
      }
    }

    // if search text provided filter by text
    if (searchRegex !== undefined && searchRegex.test(row.name) === false) {
      await cursorContinue();
      continue;
    }

    data.push(row);

    if (data.length >= limit) {
      break;
    }

    await cursorContinue();
  }

  // sort using absolute value when sorting by amount
  if (sortBy === CUSTOMER_SORT.HIGH_AMOUNT) {
    const sortedData = data.sort(
      (current: ICustomerValue, next: ICustomerValue) =>
        Math.abs(next.balance) - Math.abs(current.balance)
    );
    return { count: customerCount, data: sortedData };
  } else if (sortBy === CUSTOMER_SORT.LEAST_AMOUNT) {
    const sortedData = data.sort(
      (current: ICustomerValue, next: ICustomerValue) =>
        Math.abs(current.balance) - Math.abs(next.balance)
    );
    return { count: customerCount, data: sortedData };
  } else if (sortBy === CUSTOMER_SORT.NAME) {
    const sortedData = data.sort(
      (current: ICustomerValue, next: ICustomerValue) =>
        current.name
          .toLowerCase()
          .trim()
          .localeCompare(next.name.toLowerCase().trim())
    );
    return { count: customerCount, data: sortedData };
  }
  return { count: customerCount, data };
};

/**
 * Get dirty customers
 */
export const getDirtyCustomers = async () => {
  const db = await getDB();
  return db.getAllFromIndex(
    STORES.CUSTOMER,
    CUSTOMER_INDEX.DIRTY,
    IDBKeyRange.bound([1], [1])
  );
};

/**
 * Add single customer
 * @param {ICustomerStore['value']} customer
 */
export const addCustomer = async (customer: ICustomerStore['value']) => {
  const db = await getDB();
  return db.add(STORES.CUSTOMER, customer);
};

/**
 * Add multiple customers
 * @param {ICustomerStore['value'][]} customers
 */
export const addCustomers = async (customers: ICustomerStore['value'][]) => {
  const db = await getDB();

  const tx = db.transaction(STORES.CUSTOMER, 'readwrite');

  const promises = customers.map((customer) => tx.store.add(customer));

  return Promise.all<IDBValidKey | void>([...promises, tx.done]);
};

/**
 * Update single customer
 * @param {ICustomerStore['value']} customer
 */
export const updateCustomer = async (customer: ICustomerStore['value']) => {
  const db = await getDB();
  return db.put(STORES.CUSTOMER, customer);
};

/**
 * update multiple customers
 * @param {ICustomerStore['value'][]} customers
 */
export const updateCustomers = async (customers: ICustomerStore['value'][]) => {
  const db = await getDB();
  const tx = db.transaction(STORES.CUSTOMER, 'readwrite');

  const promises = customers.map((customer) => tx.store.put(customer));

  return Promise.all<IDBValidKey | void>([...promises, tx.done]);
};

/**
 * Get credit / debit aggregation of a book
 * @param {string} bookId
 */
export const getBookAggregations = async (bookId: string) => {
  const db = await getDB();
  const tx = db.transaction(STORES.CUSTOMER, 'readonly');
  const index = tx.store.index(CUSTOMER_INDEX.AMOUNT);
  let cursor = await index.openCursor(
    IDBKeyRange.bound([bookId, 0], [bookId, 0, []]),
    'next'
  );

  let credit = 0;
  let debit = 0;
  let canLoop = true;

  const cursorContinue = async () => {
    if (cursor === null) {
      return;
    }
    cursor = await cursor.continue();
  };

  while (canLoop) {
    if (cursor === null) {
      canLoop = false;
      continue;
    }

    if (cursor.value.balance < 0) {
      credit = credit + cursor.value.balance * -1;
    }

    if (cursor.value.balance > 0) {
      debit = debit + cursor.value.balance;
    }

    await cursorContinue();
  }

  return { credit, debit };
};

/**
 * Get Single Customer by phone
 * @param {string} bookId
 * @param {string} phone
 */
export const getCustomerByPhone = async (bookId: string, phone: string) => {
  const db = await getDB();
  return db.getFromIndex(
    STORES.CUSTOMER,
    CUSTOMER_INDEX.PHONE,
    IDBKeyRange.only([bookId, 0, phone])
  );
};

/**
 * Get Customers with duplicate phone numbers
 * @param {string} bookId
 * @param {string} phone
 */
export const getAllCustomersByPhone = async (bookId: string, phone: string) => {
  const db = await getDB();
  return db.getAllFromIndex(
    STORES.CUSTOMER,
    CUSTOMER_INDEX.PHONE,
    IDBKeyRange.only([bookId, 0, phone])
  );
};

interface IGetLastTransactionTime {
  bookId: string;
  customerId: string;
  fromTransactionId?: string;
  lastTransactionTime?: number;
}

/**
 * Get customer's last transaction time
 *
 */
export const getCustomerLastTransactionTime = async ({
  bookId,
  customerId,
  fromTransactionId,
  lastTransactionTime,
}: IGetLastTransactionTime) => {
  let fromTransaction;
  if (fromTransactionId !== undefined) {
    fromTransaction = await getTransaction(fromTransactionId);
  }

  const db = await getDB();
  const tx = db.transaction(STORES.TRANSACTION, 'readonly');

  const index = tx.store.index(TRANSACTION_INDEX.CUSTOMER);
  let cursor = await index.openCursor(
    IDBKeyRange.bound([bookId, customerId], [bookId, customerId, []]),
    'prev'
  );
  let lastUpdated = lastTransactionTime || 0;

  if (cursor === null) {
    return lastUpdated;
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
  let canLoop = true;
  while (canLoop) {
    if (cursor === null) {
      canLoop = false;
      continue;
    }

    lastUpdated =
      Number(cursor.value.updated_at) > lastUpdated
        ? Number(cursor.value.updated_at)
        : lastUpdated;

    await cursorContinue();
  }
  return lastUpdated;
};

/**
 * Get all deleted customers
 *
 */

export const getDeletedCustomers = async () => {
  const db = await getDB();
  const allCustomers = await db.getAll(STORES.CUSTOMER);

  let deletedCustomers: IDeletedCustomerValue[] = [];
  for (const customer of allCustomers) {
    if (customer.deleted === 1) {
      const book = await getBook(customer.book_id);

      if (book) {
        deletedCustomers.push({
          ...customer,
          book_name: book.business_name,
        });
      }
    }
  }
  // sort by last updated
  deletedCustomers = deletedCustomers.sort(
    (c1, c2) => Number(c2.updated_at) - Number(c1.updated_at)
  );
  return { data: deletedCustomers };
};
