// libs
import { openDB, IDBPDatabase } from 'idb';

// constants
import {
  DB_NAME,
  STORES,
  BOOK_INDEX,
  CUSTOMER_INDEX,
  TRANSACTION_INDEX,
  INVOICE_INDEX,
  PAYOUT_INDEX,
} from './constants';

// defs
import { IKBDB } from './types';

let DB_REFERENCE: IDBPDatabase<IKBDB>;

/**
 * indexeddb initialization function
 * Note - DB wont be created until we do read or write
 */
const initDB = async () => {
  return await openDB<IKBDB>(DB_NAME, 1, {
    upgrade(db, oldVersion, newVersion, dbTransaction) {
      if (oldVersion < 1) {
        // create Book Sync Info cache
        // we would store last max server sequence for each book customers and transactions
        db.createObjectStore(STORES.BOOK_SYNC_INFO, {
          keyPath: 'book_id',
        });

        // create books store - khatabook data
        const bookStore = db.createObjectStore(STORES.BOOKS, {
          keyPath: 'book_id',
        });

        // create book index for dirty books - to be synced
        bookStore.createIndex(BOOK_INDEX.DIRTY, ['dirty'], {
          unique: false,
        });

        // create customer store
        const customerStore = db.createObjectStore(STORES.CUSTOMER, {
          keyPath: 'customer_id',
        });

        // create customer index with name to sort
        customerStore.createIndex(
          CUSTOMER_INDEX.NAME,
          ['book_id', 'deleted', 'name'],
          {
            unique: false,
          }
        );

        // create customer index with balance amount to sort
        customerStore.createIndex(
          CUSTOMER_INDEX.AMOUNT,
          ['book_id', 'deleted', 'balance'],
          {
            unique: false,
          }
        );

        // create customer index with book_id and delete to get count
        customerStore.createIndex(
          CUSTOMER_INDEX.COUNT,
          ['book_id', 'deleted'],
          {
            unique: false,
          }
        );

        // create customer index for dirty records to be synced with server
        customerStore.createIndex(CUSTOMER_INDEX.DIRTY, ['dirty'], {
          unique: false,
        });

        // create customer index with last transaction timestamp
        // this index would used to show last updated customers book
        customerStore.createIndex(
          CUSTOMER_INDEX.ACTIVE_BOOK,
          ['deleted', 'last_transaction_time'],
          {
            unique: false,
          }
        );

        // create customer index with last transaction timestamp
        // last_transaction_time - key is created by web app and API wont send it
        customerStore.createIndex(
          CUSTOMER_INDEX.TRANSACTION_TIMESTAMP,
          ['book_id', 'deleted', 'last_transaction_time'],
          {
            unique: false,
          }
        );

        // create customer index with phone
        customerStore.createIndex(
          CUSTOMER_INDEX.PHONE,
          ['book_id', 'deleted', 'phone'],
          {
            unique: false,
          }
        );

        // create transactions store
        const transactionStore = db.createObjectStore(STORES.TRANSACTION, {
          keyPath: 'transaction_id',
        });

        // create transactions index for dirty records to be synced with server
        transactionStore.createIndex(TRANSACTION_INDEX.DIRTY, ['dirty'], {
          unique: false,
        });

        // create transactions index for dirty attachment records to be synced with server
        transactionStore.createIndex(
          TRANSACTION_INDEX.ATTACHMENT_DIRTY,
          ['hasLocalAttachments'],
          {
            unique: false,
          }
        );

        /**
         * create transactions index to get all transactions by customer
         * we would fetch all records of the customer
         * as transaction records against customer_id is better approach as
         * we would have lot transaction records
         **/
        transactionStore.createIndex(
          TRANSACTION_INDEX.CUSTOMER,
          ['book_id', 'customer_id', 'deleted', 'sortDate'],
          {
            unique: false,
          }
        );

        // create invoices store
        const invoiceStore = db.createObjectStore(STORES.INVOICE, {
          keyPath: 'invoice_id',
        });
        // create invoices index with book_id
        invoiceStore.createIndex(INVOICE_INDEX.BOOK_ID, ['book_id'], {
          unique: false,
        });

        // create payouts store
        const payoutStore = db.createObjectStore(STORES.PAYOUT, {
          keyPath: 'payout_id',
        });

        // create payouts index with book_id
        payoutStore.createIndex(PAYOUT_INDEX.BOOK_ID, ['book_id'], {
          unique: false,
        });
      }
    },
  });
};

export const getDB = async () => {
  if (DB_REFERENCE !== undefined) {
    return DB_REFERENCE;
  }

  DB_REFERENCE = await initDB();

  return DB_REFERENCE;
};
