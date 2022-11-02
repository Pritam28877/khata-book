// helpers
import { getDB } from './base';
import {
  fromTimestampToDate,
  isSameDay,
  isDayBetween,
} from 'src/helpers/utils/time';

// constants
import {
  INVOICE_INDEX,
  STORES,
  PAYMENTS_STATUS_FILTER,
  TRANSACTION_TYPE_FILTER,
  IDateRangeFilter,
} from './constants';
import { INVOICE_STATUS } from 'src/components/PaymentHistory/constants';

// defs
import { IInvoiceStore, IInvoiceValue } from './types';

/**
 * update multiple invoices
 * @param {InvoicesStore['value'][]} invoices
 */
export const updateInvoices = async (invoices: IInvoiceStore['value'][]) => {
  const db = await getDB();
  const tx = db.transaction(STORES.INVOICE, 'readwrite');
  // to exclude failed and expired transactions
  const promises = invoices
    .filter(
      (invoice) =>
        invoice.txn_status !== INVOICE_STATUS.FAILED &&
        invoice.txn_status !== INVOICE_STATUS.EXPIRED
    )
    .map((invoice) => tx.store.put(invoice));

  return Promise.all<IDBValidKey | void>([...promises, tx.done]);
};

/**
 * Get invoices count of a book
 * @param {string} bookId
 */
export const getInvoicesCount = async (bookId: string) => {
  const db = await getDB();
  return db.countFromIndex(
    STORES.INVOICE,
    INVOICE_INDEX.BOOK_ID,
    IDBKeyRange.only([bookId])
  );
};

export interface IGetInvoicesArgs {
  bookId: string;
  limit?: number;
  filterByStatus?: PAYMENTS_STATUS_FILTER;
  filterByType?: TRANSACTION_TYPE_FILTER;
  searchText?: string;
  filterByDate?: IDateRangeFilter;
  lastInvoiceId?: string;
}

/**
 * Get Invoices using bookId
 * @param {IGetInvoicesArgs } param0
 */

export const getInvoices = async ({
  bookId,
  limit,
  filterByStatus = PAYMENTS_STATUS_FILTER.ALL,
  filterByType = TRANSACTION_TYPE_FILTER.ALL,
  searchText,
  filterByDate,
  lastInvoiceId,
}: IGetInvoicesArgs) => {
  let lastInvoice: IInvoiceStore['value'] | undefined;
  let lastInvoiceIndexKey: [string] | undefined;
  const invoicesCount = await getInvoicesCount(bookId);

  if (lastInvoiceId !== undefined && lastInvoiceId) {
    lastInvoice = await getInvoice(lastInvoiceId);
  }

  if (lastInvoice !== undefined) {
    lastInvoiceIndexKey = [bookId];
  }

  const db = await getDB();
  const tx = db.transaction(STORES.INVOICE, 'readonly');

  const index = tx.store.index(INVOICE_INDEX.BOOK_ID);

  let cursor = await index.openCursor(
    IDBKeyRange.bound([bookId], [bookId]),
    'prev'
  );

  const cursorContinue = async () => {
    if (cursor === null) {
      return;
    }
    cursor = await cursor.continue();
  };

  const data: IInvoiceValue[] = [];

  let canLoop = cursor !== null && Boolean(cursor);
  let skippedLastKey = false;

  while (canLoop) {
    if (cursor === null) {
      canLoop = false;
      continue;
    }
    // using last indexKey to skip to the start of record
    if (
      lastInvoiceIndexKey !== undefined &&
      lastInvoice !== undefined &&
      skippedLastKey === false
    ) {
      if (cursor.value.invoice_id === lastInvoice.invoice_id) {
        await cursorContinue();
        skippedLastKey = true;
        continue;
      }
      cursor = await cursor.continuePrimaryKey(
        // @ts-ignore
        lastInvoiceIndexKey,
        lastInvoice.invoice_id
      );

      await cursorContinue();
      skippedLastKey = true;
      continue;
    }

    const row = { ...cursor.value };
    // filter by created at date
    if (filterByDate) {
      const { startDate, endDate } = filterByDate;
      const rowCreatedAtDate = fromTimestampToDate(row.created_at);
      // if one day selected as a filter
      if (
        isSameDay(startDate, endDate) &&
        !isSameDay(rowCreatedAtDate, startDate)
      ) {
        await cursorContinue();
        continue;
      } else if (
        // if date range selected as a filter
        !isSameDay(startDate, endDate) &&
        !isDayBetween(rowCreatedAtDate, startDate, endDate) &&
        !isSameDay(rowCreatedAtDate, startDate) &&
        !isSameDay(rowCreatedAtDate, endDate)
      ) {
        await cursorContinue();
        continue;
      }
    }

    switch (filterByStatus) {
      case PAYMENTS_STATUS_FILTER.PENDING: {
        if (row.txn_status !== INVOICE_STATUS.PENDING) {
          await cursorContinue();
          continue;
        }
        break;
      }
      case PAYMENTS_STATUS_FILTER.SETTLED: {
        if (!row.settlement_id) {
          await cursorContinue();
          continue;
        }
        break;
      }
      case PAYMENTS_STATUS_FILTER.RECEIVED: {
        if (row.txn_status !== INVOICE_STATUS.RECEIVED) {
          await cursorContinue();
          continue;
        }
        break;
      }
    }

    switch (filterByType) {
      case TRANSACTION_TYPE_FILTER.LINK: {
        if (row.txn_mode !== TRANSACTION_TYPE_FILTER.LINK) {
          await cursorContinue();
          continue;
        }
        break;
      }
      case TRANSACTION_TYPE_FILTER.QR: {
        if (row.txn_mode !== TRANSACTION_TYPE_FILTER.QR) {
          await cursorContinue();
          continue;
        }
        break;
      }
      case TRANSACTION_TYPE_FILTER.GIFT: {
        if (row.txn_mode !== TRANSACTION_TYPE_FILTER.GIFT) {
          await cursorContinue();
          continue;
        }
        break;
      }
    }
    data.push(row);

    if (limit && data.length >= limit) {
      break;
    }

    await cursorContinue();
  }

  const filteredData = searchText
    ? data.filter((invoice) => {
        if (invoice.from[0]) {
          const invoiceFrom = invoice?.from[0];
          if (
            invoiceFrom?.name
              .toLowerCase()
              .includes(searchText?.toLowerCase()) ||
            invoiceFrom?.total_amount.toString().includes(searchText)
          ) {
            return true;
          }
          return false;
        }
      })
    : data;

  return { data: filteredData, count: invoicesCount };
};

export const getInvoice = async (invoiceId: string) => {
  const db = await getDB();
  return db.get(STORES.INVOICE, invoiceId);
};
