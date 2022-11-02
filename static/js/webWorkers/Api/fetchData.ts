// api
import { getBooks } from 'src/api/book';
import { getCustomers } from 'src/api/customer';
import { getTransactions } from 'src/api/transaction';
import { getInvoices, getPaymentsPermissions, getPayouts } from 'src/api/money';

// db
import {
  getAllBookSyncInfo,
  updateBookSyncInfoBulk,
  updateBookSyncInfo,
} from 'src/webWorkers/DB/bookSyncInfo';
import { updateBooks } from 'src/webWorkers/DB/books';
import { getCustomer, updateCustomer } from 'src/webWorkers/DB/customers';
import { updateInvoices } from 'src/webWorkers/DB/invoices';
import { updatePayouts } from 'src/webWorkers/DB/payouts';

import {
  updateTransactions,
  getRunningBalance,
} from 'src/webWorkers/DB/transactions';

// helpers
import { getSortDate } from './helpers';

// defs
import {
  IBook,
  ICustomer,
  IInvoice,
  IPayout,
  ITransaction,
  /* IContact, */
} from 'src/types/db';
import {
  IBookSyncInfo,
  IBookValue,
  IInvoiceValue,
  ITransactionValue,
} from 'src/webWorkers/DB/types';

//constants
import { CUSTOMERS_LIMIT } from 'src/constants/customers';

export const fetchNewData = async () => {
  try {
    // NOTE: sequence of request is important
    const isBookUpdated = await fetchNewBooks();
    const isCustomerUpdated = await fetchNewCustomers();
    const isTransactionUpdated = await fetchNewTransactions();
    const { isInvoiceUpdated, isPayoutUpdated } =
      (await fetchNewPayments()) || {
        isInvoiceUpdated: false,
        isPayoutUpdated: false,
      };

    return {
      isBookUpdated,
      isCustomerUpdated,
      isTransactionUpdated,
      isInvoiceUpdated,
      isPayoutUpdated,
    };
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 * Fetch Remote Updated / New Books - using server sequnce
 */
const fetchNewBooks = async () => {
  // get local server sequence cache
  const bookSyncInfo = await getAllBookSyncInfo();

  // if we have no sync info - fetch all books from remote
  if (bookSyncInfo.length === 0) {
    // fetch books from remote
    const newBooks: { items: IBook[] } = await getBooks();

    // no books do nothing
    if (newBooks.items.length === 0) {
      return false;
    }

    const bookSyncInfos: IBookSyncInfo[] = [];
    const books: IBookValue[] = [];

    newBooks.items.forEach((book) => {
      // create new sync info for each book
      bookSyncInfos.push({
        book_id: book.book_id,
        maxBookSeq: book.server_seq || '0',
        maxCustomerSeq: '0',
        maxTransactionSeq: '0',
        maxInvoiceSeq: '0',
        maxPayoutSeq: '0',
        lastSyncAt: new Date().getTime(),
      });

      // local data book with dirty key
      books.push({
        ...book,
        dirty: 0,
      });
    });

    // upsert the books in local db
    await updateBooks(books);
    // upsert the book sync info in local db
    await updateBookSyncInfoBulk(bookSyncInfos);
    return true;
  }

  let maxBookSeq = '0';
  const syncInfoPointer: { [key: string]: IBookSyncInfo } = {};

  // evaluate local max book server sequence
  bookSyncInfo.forEach((syncInfo) => {
    if (Number(syncInfo.maxBookSeq) > Number(maxBookSeq)) {
      maxBookSeq = syncInfo.maxBookSeq;
    }
    syncInfoPointer[syncInfo.book_id] = syncInfo;
  });

  // fetch remote books based on local book server sequence
  const newBooks: { items: IBook[] } = await getBooks(maxBookSeq);

  // if no books returned from remote do nothing
  if (newBooks.items.length === 0) {
    return false;
  }

  const newBookSyncInfos: IBookSyncInfo[] = [];
  const books: IBookValue[] = [];

  newBooks.items.forEach((book) => {
    // check if book already registered in book sync info
    // else create some initial data
    const oldSyncInfo =
      syncInfoPointer[book.book_id] !== undefined
        ? syncInfoPointer[book.book_id]
        : {
            maxCustomerSeq: '0',
            maxTransactionSeq: '0',
            maxInvoiceSeq: '0',
            maxPayoutSeq: '0',
          };

    // update book syncinfo - book server sequence
    newBookSyncInfos.push({
      ...oldSyncInfo,
      book_id: book.book_id,
      maxBookSeq: book.server_seq || '0',
      lastSyncAt: new Date().getTime(),
    });

    // local book with clear dirty flag
    books.push({
      ...book,
      dirty: 0,
    });
  });

  // upsert the books into local db
  await updateBooks(books);
  // upsert the sync info in local db
  await updateBookSyncInfoBulk(newBookSyncInfos);
  return true;
};

/**
 * Fetch Remote Updated / New Customers for all books
 */
const fetchNewCustomers = async () => {
  // get local book sync info (server sequences)
  const bookSyncInfo = await getAllBookSyncInfo();

  // if no book sync info do nothing
  if (bookSyncInfo.length === 0) {
    return false;
  }

  let isCustomerUpdated = false;
  // spawn child promises for each book to fetch their remote customers
  const customerPromise = bookSyncInfo.map(async (syncInfo) => {
    const maxCustomerSeq = await fetchNewCustomersByBook(
      syncInfo.book_id,
      syncInfo.maxCustomerSeq
    );

    // if we have new customer sequence customer is updated
    if (maxCustomerSeq !== syncInfo.maxCustomerSeq) {
      isCustomerUpdated = true;
    }

    // once all customer are updated in local db
    // update book sync info with max customer sequence
    await updateBookSyncInfo({
      ...syncInfo,
      lastSyncAt: new Date().getTime(),
      maxCustomerSeq,
    });
  });

  await Promise.all(customerPromise);
  return isCustomerUpdated;
};

/**
 * Fetch Remote update / new customers for a book
 * @param {string} bookId - book id for which we want to fetch customers
 * @param {string} serverSeq - local max customer server sequence of the book
 */
const fetchNewCustomersByBook = async (bookId: string, serverSeq: string) => {
  // store max customer sequence - we need to return this
  let lastServerSeq = serverSeq;

  // loop till we fetch all remote customers
  while (true) {
    // get remote customers for the book limit to infinity (no limit)
    const newCustomersData: {
      total: string;
      returned: number;
      items: ICustomer[];
    } = await getCustomers({
      bookId,
      serverSeq: lastServerSeq,
      limit: CUSTOMERS_LIMIT,
    });

    // if no new / updated customers do nothing break the loop
    if (newCustomersData.items.length === 0) {
      break;
    }

    // update customers in local db
    lastServerSeq = await updateCustomerWithTransactionTime(
      newCustomersData.items,
      lastServerSeq
    );

    // if we have fetched all updated / new customers break the loop
    if (Number(newCustomersData.total) <= newCustomersData.returned) {
      break;
    }
  }

  return lastServerSeq;
};

/**
 * Fetch new / updated transactions from all books
 */
const fetchNewTransactions = async () => {
  // get local book sync info (server sequences)
  const bookSyncInfo = await getAllBookSyncInfo();

  // if no book sync info do nothing
  if (bookSyncInfo.length === 0) {
    return false;
  }

  let isTransactionUpdated = false;
  // spawn child promises for each book to fetch their remote transactions
  const transactionPromise = bookSyncInfo.map(async (syncInfo) => {
    const maxTransactionSeq = await fetchNewTransactionsByBook(
      syncInfo.book_id,
      syncInfo.maxTransactionSeq
    );

    if (maxTransactionSeq !== syncInfo.maxTransactionSeq) {
      isTransactionUpdated = true;
    }

    // once all transactions are updated in local db
    // update book sync info with max customer sequence
    await updateBookSyncInfo({
      ...syncInfo,
      lastSyncAt: new Date().getTime(),
      maxTransactionSeq,
    });
  });

  await Promise.all(transactionPromise);
  return isTransactionUpdated;
};

/**
 * Fetch Remote update / new transactions for a book
 * @param {string} bookId - book id for which we want to fetch transactions
 * @param {string} serverSeq - local max transactions server sequence of the book
 */
const fetchNewTransactionsByBook = async (
  bookId: string,
  serverSeq: string
) => {
  // store max transaction sequence - we need to return this
  let lastServerSeq = serverSeq;

  // loop till we fetch all remote transactions
  while (true) {
    const customerTransactionTime: {
      [key: string]: number;
    } = {};

    // get remote transactions for the book limit to 100
    const newTransactionData: {
      total: string;
      returned: number;
      items: ITransaction[];
    } = await getTransactions({
      bookId,
      serverSeq: lastServerSeq,
      limit: 100,
    });

    // if no transactions do nothing and break the loop
    if (newTransactionData.items.length === 0) {
      break;
    }

    // loop through transactions data and create the customer reference for max transaction time
    newTransactionData.items.forEach((transaction) => {
      const updatedAt = Number(transaction.updated_at);

      if (customerTransactionTime[transaction.customer_id] === undefined) {
        customerTransactionTime[transaction.customer_id] = updatedAt;
        return;
      }

      const lastTransactionTime =
        customerTransactionTime[transaction.customer_id];

      if (lastTransactionTime < updatedAt) {
        customerTransactionTime[transaction.customer_id] = updatedAt;
      }
    });

    // create local transactions data with dirty cleared
    let newTransactions: ITransactionValue[] = newTransactionData.items.map(
      (transaction) => ({
        ...transaction,
        sortDate: getSortDate(transaction.date, transaction.created_at),
        dirty: 0,
      })
    );

    // sort transactions by amount then by created_at then by date
    newTransactions = newTransactions
      .sort(
        (transaction1, transaction2) =>
          Math.abs(transaction2.amount) - Math.abs(transaction1.amount)
      )
      .sort(
        (transaction1, transaction2) =>
          Number(transaction2.created_at) - Number(transaction1.created_at)
      )
      .sort(
        (transaction1, transaction2) =>
          Date.parse(transaction2.date) - Date.parse(transaction1.date)
      );

    // get transactions maxServerSeq
    lastServerSeq =
      newTransactions[newTransactions.length - 1].server_seq || '0';

    // upsert transactions in local db
    await updateTransactions(newTransactions);
    // reconcile customer last transaction time
    await updateCustomerTransactionTime(customerTransactionTime);

    // if all transactions fetched break the loop
    if (Number(newTransactionData.total) <= newTransactionData.returned) {
      break;
    }
  }

  return lastServerSeq;
};

/**
 * Fetch Remote Updated / New payments for payment enabled books
 */
const fetchNewPayments = async () => {
  // get local book sync info (server sequences)
  const bookSyncInfo = await getAllBookSyncInfo();

  // if no book sync info do nothing
  if (bookSyncInfo.length === 0) {
    return false;
  }

  let isInvoiceUpdated = false;
  let isPayoutUpdated = false;

  // spawn child promises for each book to fetch their remote invoices if this book have a bank account
  const paymentPromise = bookSyncInfo.map(async (syncInfo) => {
    const { enabled } = await getPaymentsPermissions(syncInfo.book_id);

    if (enabled) {
      const maxInvoiceSeq = await fetchNewInvoicesByBook(
        syncInfo.book_id,
        syncInfo.maxInvoiceSeq
      );
      const maxPayoutSeq = await fetchNewPayoutsByBook(
        syncInfo.book_id,
        syncInfo.maxPayoutSeq
      );
      // if we have new invoice sequence invoice is updated
      if (maxInvoiceSeq !== syncInfo.maxInvoiceSeq) {
        isInvoiceUpdated = true;
      }

      // if we have new payout sequence payout is updated
      if (maxPayoutSeq !== syncInfo.maxPayoutSeq) {
        isPayoutUpdated = true;
      }
      // once all invoices are updated in local db
      // update book sync info with max invoice sequence
      await updateBookSyncInfo({
        ...syncInfo,
        lastSyncAt: new Date().getTime(),
        maxInvoiceSeq: maxInvoiceSeq || '0',
        maxPayoutSeq: maxPayoutSeq || '0',
      });
    }
  });
  await Promise.all(paymentPromise);
  return { isInvoiceUpdated, isPayoutUpdated };
};

/**
 * Fetch Remote updated / new invoices for a book
 * @param {string} bookId - book id for which we want to fetch invoices
 * @param {string} serverSeq - local max invoices server sequence of the book
 */
const fetchNewInvoicesByBook = async (bookId: string, serverSeq: string) => {
  // store max invoice sequence - we need to return this
  let lastServerSeq = serverSeq;

  // loop till we fetch all remote  invoices
  while (true) {
    // get remote invoices for the book limit to 100
    const newInvoiceData: {
      total: string;
      returned: number;
      items: IInvoice[];
    } = await getInvoices({
      bookId,
      serverSeq: lastServerSeq || '0',
      limit: 100,
    });

    // if no invoices do nothing and break the loop
    if (newInvoiceData.items.length === 0) {
      break;
    }

    // create local invoices data with book_id value

    const newInvoices: IInvoiceValue[] = newInvoiceData.items
      .sort((a, b) => b.created_at - a.created_at)
      .map((invoice) => ({ ...invoice, book_id: bookId }));

    // get invoices maxServerSeq
    lastServerSeq = newInvoices[newInvoices.length - 1].server_seq || '0';

    // upsert invoices in local db
    await updateInvoices(newInvoices);

    // if all invoices fetched break the loop
    if (Number(newInvoiceData.total) <= newInvoiceData.returned) {
      break;
    }
  }
  return lastServerSeq;
};

/**
 * Fetch Remote updated / new payouts for a book
 * @param {string} bookId - book id for which we want to fetch payouts
 * @param {string} serverSeq - local max payouts server sequence of the book
 */
const fetchNewPayoutsByBook = async (bookId: string, serverSeq: string) => {
  // store max invoice sequence - we need to return this
  let lastServerSeq = serverSeq;

  // loop till we fetch all remote  invoices
  while (true) {
    // get remote payouts for the book limit to 100
    const newPayoutsData: {
      total: string;
      returned: number;
      items: IPayout[];
    } = await getPayouts({
      bookId,
      serverSeq: lastServerSeq || '0',
      limit: 100,
    });

    // if no payouts do nothing and break the loop
    if (newPayoutsData.items.length === 0) {
      break;
    }
    const newPayouts = newPayoutsData.items.sort(
      (a, b) => b.created_at - a.created_at
    );

    // get payouts maxServerSeq
    lastServerSeq = newPayouts[newPayouts.length - 1].server_seq || '0';

    // upsert payouts in local db
    await updatePayouts(newPayouts);

    // if all invoices fetched break the loop
    if (Number(newPayoutsData.total) <= newPayoutsData.returned) {
      break;
    }
  }
  return lastServerSeq;
};

/**
 * Helper function to update local customer data with max last transaction time
 * @param {ICustomer[]} customersData - list of customers
 * @param {string} lastServerSeq - last max server sequence
 */
const updateCustomerWithTransactionTime = async (
  customersData: ICustomer[],
  lastServerSeq: string
) => {
  let i = 0;

  // loop through whole customer data
  while (true) {
    if (i >= customersData.length) {
      break;
    }

    const customerData = customersData[i];
    // get local db customer data
    const dbCustomer = await getCustomer(customerData.customer_id);

    // get local db customer transaction time
    const dbLastTransactionTime = dbCustomer?.last_transaction_time || 0;

    // evaluate the max transaction time
    const lastTransactionTime = Math.max(
      dbLastTransactionTime,
      Number(customerData.updated_at)
    );

    const customer = {
      ...customerData,
      dirty: 0,
      last_transaction_time: lastTransactionTime,
    };

    // update max customer server seq if remote is greater
    if (Number(customer.server_seq) > Number(lastServerSeq)) {
      lastServerSeq = customer.server_seq || '0';
    }

    // upsert customer in local db
    await updateCustomer(customer);

    i++;
  }

  return lastServerSeq;
};

/**
 * Helper function to update a customers last transaction time
 * @param {{[key: string]: number}} customerTransactionTime
 */
const updateCustomerTransactionTime = async (customerTransactionTime: {
  [key: string]: number;
}) => {
  const customerIds = Object.keys(customerTransactionTime);

  let i = 0;
  while (true) {
    if (i >= customerIds.length) {
      break;
    }

    const customerId = customerIds[i];

    // get local db customer
    const dbCustomer = await getCustomer(customerId);

    // if customer doesnt exist dont do anything
    // ideally this case should never come
    if (dbCustomer === undefined) {
      continue;
    }

    // get customer local last transaction time
    const dbLastTransactionTime = dbCustomer?.last_transaction_time || 0;

    // max transaction time from remote transactions data
    let transactionMaxTime = customerTransactionTime[customerId];

    // local transaction time is greater than remote than user local transactionTime
    if (transactionMaxTime < dbLastTransactionTime) {
      transactionMaxTime = dbLastTransactionTime;
    }

    // update local customer balance
    const balance = await getRunningBalance({
      bookId: dbCustomer?.book_id || '',
      customerId: dbCustomer?.customer_id || '',
    });

    const newCustomer = {
      ...dbCustomer,
      balance,
      last_transaction_time: transactionMaxTime,
    };

    // update local customer last transaction time
    // @ts-ignore
    await updateCustomer(newCustomer);

    i++;
  }
};
