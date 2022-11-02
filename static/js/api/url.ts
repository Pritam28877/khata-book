const BASE_URL = process.env.REACT_APP_API_ENDPOINT;
const SMS_BASE_URL = process.env.REACT_APP_SMS_API_ENDPOINT;
const CONTACTS_BASE_URL = process.env.REACT_APP_CONTACT_API_ENDPOINT;
export const PAYMENT_URL = process.env.REACT_APP_HISTORY_LINK;

export enum ROUTES {
  REQUEST_OTP = 'REQUEST_OTP',
  LOGIN = 'LOGIN',
  GET_BOOKS = 'GET_BOOKS',
  GET_CUSTOMERS = 'GET_CUSTOMERS',
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  POST_BOOKS = 'POST_BOOKS',
  POST_CUSTOMERS = 'POST_CUSTOMERS',
  POST_TRANSACTIONS = 'POST_TRANSACTIONS',
  S3_UPLOAD_URL = 'S3_UPLOAD_URL',
  USER_PREFERENCES = 'USER_PREFERENCES',

  // money
  FETCH_QR_CODE = 'FETCH_QR_CODE',
  GET_BANK_ACCOUNT = 'GET_BANK_ACCOUNT',
  GET_INVOICES = 'GET_INVOICES',
  GET_PAYOUTS = 'GET_PAYOUTS',
  VERIFY_KYC = 'VERIFY_KYC',
  PINCODE_DETAILS = 'PINCODE_DETAILS',
  IS_PINCODE_SERVICEABLE = 'IS_PINCODE_SERVICEABLE',
  ORDER_QR_CODE = 'ORDER_QR_CODE',
  PAYMENT_CHARGES = 'PAYMENT_CHARGES',
  GET_QR_CODE_PLACED = 'GET_QR_CODE_PLACED',
  GET_PAYMENTS_PERMISSIONS = 'GET_PAYMENTS_PERMISSIONS',

  // SMS reminder
  SEND_SMS_REMINDER = 'SEND_SMS_REMINDER',

  // contacts
  FETCH_CONTACTS = 'FETCH_CONTACTS',

  // reports
  CUSTOMER_REPORTS = 'CUSTOMER_REPORTS',
}

export const urls = {
  [ROUTES.REQUEST_OTP]: '/v1/auth/request-otp',
  [ROUTES.LOGIN]: '/v1/auth/login/?version=v2',
  [ROUTES.GET_BOOKS]: '/v1/books/sync/',
  [ROUTES.GET_CUSTOMERS]: '/v1/customers/sync/',
  [ROUTES.GET_TRANSACTIONS]: '/v1/transactions/sync/',
  [ROUTES.POST_BOOKS]: '/v1/books/sync/',
  [ROUTES.POST_CUSTOMERS]: '/v1/customers/sync/',
  [ROUTES.POST_TRANSACTIONS]: '/v1/transactions/sync/',
  [ROUTES.S3_UPLOAD_URL]: '/v1/uploads/gen-pre-signed-url',
  [ROUTES.USER_PREFERENCES]: '/v1/communication_settings/preferences',

  // money
  [ROUTES.FETCH_QR_CODE]: '/payments/v1/qr-code-management/qr-code/',
  [ROUTES.GET_BANK_ACCOUNT]: '/payments/v1/account-management/accounts/get/',
  [ROUTES.GET_INVOICES]: '/payments/v1/invoice-feed-v2/sync/',
  [ROUTES.GET_PAYOUTS]: '/payments/v1/payout-feed/sync/',
  [ROUTES.VERIFY_KYC]: '/payments/v1/kyc',
  [ROUTES.PINCODE_DETAILS]:
    '/payments/v1/qr-code-management/details-from-pincode',
  [ROUTES.IS_PINCODE_SERVICEABLE]:
    '/payments/v1/qr-code-management/is-pincode-serviceable',
  [ROUTES.ORDER_QR_CODE]: '/payments/v1/qr-code-management/submit-qr-order',
  [ROUTES.PAYMENT_CHARGES]: '/payments/v2/payment-instrument/charges',
  [ROUTES.GET_QR_CODE_PLACED]: '/payments/v1/qr-code-management/qr-code',
  [ROUTES.GET_PAYMENTS_PERMISSIONS]: '/payments/v1/ab-experiment',

  // SMS reminder
  [ROUTES.SEND_SMS_REMINDER]: '/pwa/v1/send-payment-reminder',

  // contacts
  [ROUTES.FETCH_CONTACTS]: '/cash_register/v1/backup/contacts',

  // Reports
  [ROUTES.CUSTOMER_REPORTS]:
    '/reports/api-v2/gen-pdf/bounded-customer-transactions',
};

export function getUrl(route: ROUTES) {
  return BASE_URL + urls[route];
}

export function getSmsUrl(route: ROUTES) {
  return SMS_BASE_URL + urls[route];
}

export function getContactsUrl(route: ROUTES) {
  return CONTACTS_BASE_URL + urls[route];
}
