export const DB_NAME = 'kb-database';

export enum STORES {
  BOOKS = 'books',
  CUSTOMER = 'customers',
  TRANSACTION = 'transactions',
  BOOK_SYNC_INFO = 'bookSyncInfo',
  INVOICE = 'invoices',
  PAYOUT = 'payouts',
  CONTACTS = 'contacts',
}

export enum BOOK_INDEX {
  DIRTY = 'bookDirty',
}

export enum CUSTOMER_INDEX {
  NAME = 'customerName',
  AMOUNT = 'customerAmount',
  COUNT = 'customerCount',
  DIRTY = 'customerDirty',
  TRANSACTION_TIMESTAMP = 'customerTransactionTimestamp',
  ACTIVE_BOOK = 'customerBookTimestamp',
  PHONE = 'customerPhone',
}

export enum TRANSACTION_INDEX {
  CUSTOMER = 'transactionCust',
  ATTACHMENT_DIRTY = 'transactionAttachmentDirty',
  DIRTY = 'transactionDirty',
}

export enum CUSTOMER_FILTER {
  ALL = 'ALL',
  RECEIVABLES = 'RECEIVABLES',
  PAYABLES = 'PAYABLES',
  SETTLED = 'SETTLED',
}

export enum CUSTOMER_SORT {
  RECENT = 'RECENT',
  HIGH_AMOUNT = 'HIGH_AMOUNT',
  NAME = 'NAME',
  OLDEST = 'OLDEST',
  LEAST_AMOUNT = 'LEAST_AMOUNT',
}

export enum INVOICE_INDEX {
  BOOK_ID = 'invoiceBookId',
}

export enum PAYOUT_INDEX {
  BOOK_ID = 'payoutBookId',
}

export enum PAYMENTS_STATUS_FILTER {
  ALL = 'ALL',
  PENDING = 'PENDING',
  RECEIVED = 'RECEIVED',
  SETTLED = 'SETTLED',
  SUCCESS = 'SUCCESS',
}

export enum TRANSACTION_TYPE_FILTER {
  ALL = 'ALL',
  LINK = 'LINK',
  QR = 'QR',
  GIFT = 'GIFT',
}

export interface IDateRangeFilter {
  startDate: Date;
  endDate: Date;
}

export interface IDateRange {
  startDate?: Date;
  endDate?: Date;
}
