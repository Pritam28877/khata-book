import { IBookValue } from './../../webWorkers/DB/types';
// defs
import { ITransactionValue, ICustomerValue } from 'src/webWorkers/DB/types';

// constants
import { CUSTOM_EVENTS } from './constants';

export const dispatchTransactionChange = (transaction?: ITransactionValue) => {
  const event = new CustomEvent(CUSTOM_EVENTS.TRANSACTION_CHANGED, {
    detail: transaction,
  });
  document.dispatchEvent(event);
};

export const dispatchTransactionEdited = (transaction?: ITransactionValue) => {
  const event = new CustomEvent(CUSTOM_EVENTS.TRANSACTION_EDITED, {
    detail: transaction,
  });
  document.dispatchEvent(event);
};

export const dispatchTransactionDeleted = (transaction?: ITransactionValue) => {
  const event = new CustomEvent(CUSTOM_EVENTS.ConfirmDeleteTransactionClick, {
    detail: transaction,
  });
  document.dispatchEvent(event);
};

export const dispatchCustomerChange = (customer?: ICustomerValue) => {
  const event = new CustomEvent(CUSTOM_EVENTS.CUSTOMER_CHANGED, {
    detail: customer,
  });
  document.dispatchEvent(event);
};

export const dispatchCustomerDeleted = (customer?: ICustomerValue) => {
  const event = new CustomEvent(CUSTOM_EVENTS.CUSTOMER_DELETED, {
    detail: customer,
  });
  document.dispatchEvent(event);
};

export const dispatchBookDeleted = (book?: IBookValue) => {
  const event = new CustomEvent(CUSTOM_EVENTS.BOOK_DELETED, {
    detail: book,
  });
  document.dispatchEvent(event);
};

export const dispatchBookChanged = (book?: IBookValue) => {
  const event = new CustomEvent(CUSTOM_EVENTS.BOOK_CHANGED, {
    detail: book,
  });
  document.dispatchEvent(event);
};

export const dispatchServiceWorkerUpdate = (sw: ServiceWorker) => {
  const event = new CustomEvent(CUSTOM_EVENTS.SERVICE_WORKER_UPDATED, {
    detail: sw,
  });
  document.dispatchEvent(event);
};

export const dispatchInvoiceChange = () => {
  const event = new CustomEvent(CUSTOM_EVENTS.INVOICE_CHANGED, {});
  document.dispatchEvent(event);
};
