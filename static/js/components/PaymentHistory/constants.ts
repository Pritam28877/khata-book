export const TRANSACTION_TYPE_FILTERS = [
  { name: 'ALL', label: 'all' },
  {
    name: 'QR',
    label: 'qr_transaction',
  },
  {
    name: 'LINK',
    label: 'payment_link_transaction',
  },
  {
    name: 'GIFT',
    label: 'gift_transactions',
  },
];

export const TRANSACTIONS_STATUS_FILTERS = [
  { name: 'ALL', label: 'all' },
  {
    name: 'PENDING',
    label: 'pending',
  },
  { name: 'RECEIVED', label: 'received' },
  {
    name: 'SETTLED',
    label: 'filter_settled',
  },
];

export const SETTLEMENTS_STATUS_FILTERS = [
  { name: 'ALL', label: 'all' },
  {
    name: 'PENDING',
    label: 'pending',
  },
  { name: 'SUCCESS', label: 'success' },
];

export enum INVOICE_STATUS {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  RECEIVED = 'RECEIVED',
  REFUND = 'REFUND',
  BLOCKED = 'BLOCKED',
  EXPIRED = 'EXPIRED',
}

export enum PAYMENTS_TYPES {
  INVOICE = 'INVOICE',
  PAYOUT = 'PAYOUT',
}

export enum PAYMENTS_TRANSACTIONS_TYPES {
  LINK = 'LINK',
  QR = 'QR',
  GIFT = 'GIFT',
}

export enum JOURNEY_STATUSES {
  FAILED = 'FAILED',
  NOT_REACHED = 'NOT_REACHED',
  SUCCESS = 'SUCCESS',
  IN_PROGRESS = 'IN_PROGRESS',
}

export enum JOURNEY_TYPES {
  PAYOUT_INIT = 'PAYOUT_INIT',
  PAYMENT_PROCESSING = 'PAYMENT_PROCESSING',
  DEPOSIT = 'DEPOSIT',
  GENERATE = 'GENERATE',
  PAY = 'PAY',
}

export enum PAYMENT_CHARGE_TYPES {
  UPI = 'UPI',
  CC = 'CC',
  BUSINESS = 'BUSINESS',
  AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
  RUPAY = 'RUPAY',
  DC = 'DC',
  WALLET = 'WALLET',
}
export enum PAYMENT_METHODS_TYPES {
  UPI = 'UPI',
  CC = 'CC',
  DC = 'DC',
  NET_BANKING = ' NET_BANKING',
  WALLET = 'WALLET',
  RUPAY = 'RUPAY',
}

export const PAYMENT_CHARGE_TYPES_MAP = {
  UPI: 'UPI Payments',
  CC: 'Credit Card',
  BUSINESS: 'Business Card',
  AMERICAN_EXPRESS: 'AMEX',
  RUPAY: 'RuPay Debit Cards',
  DC: 'Debit Card',
  WALLET: 'Wallet',
};

export const PAYMENT_METHODS_TYPES_MAP = {
  UPI: 'payment_upi_free',
  CC: 'credit_card',
  DC: 'debit_card',
  NET_BANKING: 'payment_net_banking',
  WALLET: 'wallet',
  RUPAY: 'rupay_debit_card',
};

export const TODAY_RANGE = {
  startDate: new Date(),
  endDate: new Date(),
};

export enum USER_TYPE {
  ACCOUNT_SET_BUT_NOT_KYC = 'User account is not KYC verified.',
  ACCOUNT_NOT_SET = 'Account not set or not primary for given book',
  ACCOUNT_FULL_SET = '',
}

export const BLOCKED_BUCKET = '7';
