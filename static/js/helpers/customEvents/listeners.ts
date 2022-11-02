import { IBookValue } from './../../webWorkers/DB/types';
// defs
import { ITransactionValue, ICustomerValue } from 'src/webWorkers/DB/types';

// constants
import { CUSTOM_EVENTS } from './constants';

const listenChange = <T>(
  callback: (detail: T) => void,
  event: CUSTOM_EVENTS
) => {
  const listenerFunc = (e: CustomEvent<T>) => {
    callback(e.detail);
  };

  document.addEventListener(event, listenerFunc as EventListener, false);

  return () => {
    document.removeEventListener(event, listenerFunc as EventListener);
  };
};

export const listenTransactionChange = (
  callback: (transaction: ITransactionValue) => void
) => {
  return listenChange<ITransactionValue>(
    callback,
    CUSTOM_EVENTS.TRANSACTION_CHANGED
  );
};

export const listenTransactionEdited = (
  callback: (transaction: ITransactionValue) => void
) => {
  return listenChange<ITransactionValue>(
    callback,
    CUSTOM_EVENTS.TRANSACTION_EDITED
  );
};

export const listenTransactionDeleted = (
  callback: (transaction: ITransactionValue) => void
) => {
  return listenChange<ITransactionValue>(
    callback,
    CUSTOM_EVENTS.ConfirmDeleteTransactionClick
  );
};

export const listenCustomerChange = (
  callback: (customer: ICustomerValue) => void
) => {
  return listenChange<ICustomerValue>(callback, CUSTOM_EVENTS.CUSTOMER_CHANGED);
};

export const listenCustomerDeleted = (
  callback: (customer: ICustomerValue) => void
) => {
  return listenChange<ICustomerValue>(callback, CUSTOM_EVENTS.CUSTOMER_DELETED);
};

export const listenBookDeleted = (callback: (customer: IBookValue) => void) => {
  return listenChange<IBookValue>(callback, CUSTOM_EVENTS.BOOK_DELETED);
};
export const listenBookChanged = (callback: (customer: IBookValue) => void) => {
  return listenChange<IBookValue>(callback, CUSTOM_EVENTS.BOOK_CHANGED);
};

export const listenServiceWorkerChange = (
  callback: (sw: ServiceWorker) => void
) => {
  return listenChange<ServiceWorker>(
    callback,
    CUSTOM_EVENTS.SERVICE_WORKER_UPDATED
  );
};

export const listenInvoiceChange = (callback: () => void) => {
  return listenChange(callback, CUSTOM_EVENTS.INVOICE_CHANGED);
};
