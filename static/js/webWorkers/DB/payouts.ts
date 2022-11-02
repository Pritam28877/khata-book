// helpers
import { getDB } from './base';
import {
  fromTimestampToDate,
  isSameDay,
  isDayBetween,
} from 'src/helpers/utils/time';

// constants
import {
  PAYOUT_INDEX,
  STORES,
  TRANSACTION_TYPE_FILTER,
  PAYMENTS_STATUS_FILTER,
  IDateRangeFilter,
} from './constants';

// defs
import { IPayoutStore } from './types';

/**
 * update multiple payouts
 * @param {IPayoutStore['value'][]} payouts
 */
export const updatePayouts = async (payouts: IPayoutStore['value'][]) => {
  const db = await getDB();
  const tx = db.transaction(STORES.PAYOUT, 'readwrite');

  const promises = payouts.map((payout) => tx.store.put(payout));

  return Promise.all<IDBValidKey | void>([...promises, tx.done]);
};

/**
 * Get payouts count of a book
 * @param {string} bookId
 */
export const getPayoutsCount = async (bookId: string) => {
  const db = await getDB();
  return db.countFromIndex(
    STORES.PAYOUT,
    PAYOUT_INDEX.BOOK_ID,
    IDBKeyRange.only([bookId])
  );
};

export interface IGetPayoutsArgs {
  bookId: string;
  limit?: number;
  filterByStatus?: PAYMENTS_STATUS_FILTER;
  filterByType?: TRANSACTION_TYPE_FILTER;
  filterByDate?: IDateRangeFilter;
  searchText?: string;
  lastPayoutId?: string;
}

/**
 * Get Payouts using bookId
 * @param {IGetPayoutsArgs } param0
 */

export const getPayouts = async ({
  bookId,
  limit,
  filterByStatus,
  filterByType,
  searchText,
  filterByDate,
  lastPayoutId,
}: IGetPayoutsArgs) => {
  let lastPayout: IPayoutStore['value'] | undefined;
  let lastPayoutIndexKey: [string] | undefined;
  const payoutsCount = await getPayoutsCount(bookId);

  if (lastPayoutId !== undefined && lastPayoutId) {
    lastPayout = await getPayout(lastPayoutId);
  }

  if (lastPayout !== undefined) {
    lastPayoutIndexKey = [bookId];
  }

  const db = await getDB();
  const tx = db.transaction(STORES.PAYOUT, 'readonly');

  const index = tx.store.index(PAYOUT_INDEX.BOOK_ID);

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

  const data = [];

  let canLoop = cursor !== null && Boolean(cursor);
  let skippedLastKey = false;
  while (canLoop) {
    if (cursor === null) {
      canLoop = false;
      continue;
    }

    // using last indexKey to skip to the start of record
    if (
      lastPayoutIndexKey !== undefined &&
      lastPayout !== undefined &&
      skippedLastKey === false
    ) {
      if (cursor.value.payout_id === lastPayout.payout_id) {
        await cursorContinue();
        skippedLastKey = true;
        continue;
      }
      cursor = await cursor.continuePrimaryKey(
        // @ts-ignore
        lastPayoutIndexKey,
        lastPayout.payout_id
      );

      await cursorContinue();
      skippedLastKey = true;
      continue;
    }

    const row = { ...cursor.value };

    // filter by create at date
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
        if (row.status !== PAYMENTS_STATUS_FILTER.PENDING) {
          await cursorContinue();
          continue;
        }
        break;
      }
      case PAYMENTS_STATUS_FILTER.SUCCESS: {
        if (row.status !== PAYMENTS_STATUS_FILTER.SUCCESS) {
          await cursorContinue();
          continue;
        }
        break;
      }
    }

    switch (filterByType) {
      case TRANSACTION_TYPE_FILTER.LINK: {
        if (row.transactions[0].txn_mode !== TRANSACTION_TYPE_FILTER.LINK) {
          await cursorContinue();
          continue;
        }
        break;
      }
      case TRANSACTION_TYPE_FILTER.QR: {
        if (row.transactions[0].txn_mode !== TRANSACTION_TYPE_FILTER.QR) {
          await cursorContinue();
          continue;
        }
        break;
      }
      case TRANSACTION_TYPE_FILTER.GIFT: {
        if (row.transactions[0].txn_mode !== TRANSACTION_TYPE_FILTER.GIFT) {
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
    ? data.filter((payout) => {
        if (payout?.transactions[0]?.from[0]) {
          const invoiceFrom: string =
            payout?.transactions[0]?.from[0]?.name?.toLowerCase();
          if (invoiceFrom?.includes(searchText?.toLowerCase())) {
            return true;
          }
          return false;
        }
      })
    : data;

  return { data: filteredData, count: payoutsCount };
};

export const getPayout = async (payoutId: string) => {
  const db = await getDB();
  return db.get(STORES.PAYOUT, payoutId);
};
