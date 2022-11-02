// helpers
import { setFetchHeaders } from 'src/helpers/api';
import { isEmptyValues } from 'src/helpers/utils';
import { generateUUID, getCurrentTime, getSortDate } from './helpers';

// db
import {
  getTransactions as getTransactionsDB,
  getTransaction as getTransactionDB,
  getRunningBalance as getRunningBalanceDB,
  addTransaction as addTransactionDB,
  updateTransaction as updateTransactionDB,
  getDeletedTransactions as getDeletedTransactionsDB,
} from 'src/webWorkers/DB/transactions';

// api
import { pushTransactions } from 'src/api/transaction';

// helpers
import {
  reconcileCustomerBalance,
  uploadLocalAttachments,
  IAttachment,
} from './transactionHelper';

// defs
import { IDevice, IUser } from 'src/types/user';
import { ITransaction } from 'src/types/db';
import { ITransactionValue } from 'src/webWorkers/DB/types';

interface IAddTransactionArgs {
  bookId?: string | undefined;
  customerId?: string | undefined;
  amount: number;
  note?: string;
  date: string;
  user: IUser;
  deviceInfo: IDevice;
  attachments: IAttachment[];
}

export const addTransaction = async ({
  bookId,
  customerId,
  amount,
  note,
  date,
  user,
  deviceInfo,
  attachments,
}: IAddTransactionArgs) => {
  if (bookId === undefined) {
    return Promise.reject('Invalid Book Id');
  }

  if (customerId === undefined) {
    return Promise.reject('Invalid Customer Id');
  }

  if (amount === undefined || Number.isNaN(Number(amount))) {
    return Promise.reject('Invalid amount');
  }

  if (date === undefined) {
    return Promise.reject('Invalid date');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const transactionId = generateUUID();

  const transactionRemote: ITransaction = {
    transaction_id: transactionId,
    book_id: bookId,
    customer_id: customerId,
    amount,
    date,
    description: note,
    attachments: [],
    sms_status: 0,
    deleted: 0,
    created_at: String(getCurrentTime()),
    created_by_user: user.user_id,
    created_by_device: deviceInfo.device_id,
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
  };

  const transaction = {
    ...transactionRemote,
    sortDate: getSortDate(date, String(getCurrentTime())),
    localAttachments: attachments,
    hasLocalAttachments: attachments.length > 0 ? 1 : 0,
    dirty: 1,
  };

  try {
    // add in local DB
    await addTransactionDB(transaction);
    await reconcileCustomerBalance(customerId);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }

  await pushRemoteTransaction({
    bookId,
    transactionId,
    transaction,
    transactionRemote,
    attachments,
    userId: user.user_id,
  });

  return transaction;
};

interface IUpdateTransactionArgs {
  transactionId: string;
  bookId?: string | undefined;
  customerId?: string | undefined;
  amount: number;
  note?: string;
  date: string;
  user: IUser;
  deviceInfo: IDevice;
  attachments: IAttachment[];
  remoteAttachments: string[];
}

export const updateTransaction = async ({
  transactionId,
  bookId,
  customerId,
  amount,
  note,
  date,
  user,
  deviceInfo,
  attachments,
  remoteAttachments,
}: IUpdateTransactionArgs) => {
  if (bookId === undefined) {
    return Promise.reject('Invalid Book Id');
  }

  if (customerId === undefined) {
    return Promise.reject('Invalid Customer Id');
  }

  if (amount === undefined || Number.isNaN(Number(amount))) {
    return Promise.reject('Invalid amount');
  }

  if (date === undefined) {
    return Promise.reject('Invalid date');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const localTransaction = await getTransactionDB(transactionId);

  if (localTransaction === undefined) {
    return Promise.reject('Transaction not found');
  }

  const transactionRemote: ITransaction = {
    ...localTransaction,
    transaction_id: transactionId,
    book_id: bookId,
    customer_id: customerId,
    amount,
    date,
    description: note,
    attachments: remoteAttachments,
    sms_status: 0,
    deleted: 0,
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
  };

  const transaction = {
    ...transactionRemote,
    sortDate: getSortDate(date, localTransaction.created_at),
    localAttachments: attachments,
    hasLocalAttachments: attachments.length > 0 ? 1 : 0,
    dirty: 1,
  };

  try {
    // update in local DB
    await updateTransactionDB(transaction);
    await reconcileCustomerBalance(customerId);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }

  await pushRemoteTransaction({
    bookId,
    transactionId,
    transaction,
    transactionRemote,
    attachments,
    userId: user.user_id,
  });

  return transaction;
};

interface IDeleteTransactionArgs {
  transactionId: string;
  user: IUser;
  deviceInfo: IDevice;
}
export const deleteTransaction = async ({
  transactionId,
  user,
  deviceInfo,
}: IDeleteTransactionArgs) => {
  if (transactionId === undefined) {
    return Promise.reject('Invalid Transaction Id');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const localTransaction = await getTransactionDB(transactionId);

  if (localTransaction === undefined) {
    return Promise.reject('Transaction not found');
  }

  const transactionRemote: ITransaction = {
    ...localTransaction,
    sms_status: 0,
    deleted: 1,
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
  };

  const transaction = {
    ...transactionRemote,
    sortDate: localTransaction.sortDate,
    dirty: 1,
  };

  try {
    // update in local DB
    await updateTransactionDB(transaction);
    await reconcileCustomerBalance(localTransaction.customer_id);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }

  await pushRemoteTransaction({
    transactionId,
    transaction,
    transactionRemote,
    bookId: localTransaction.book_id,
    attachments: [],
    userId: user.user_id,
  });

  return transaction;
};

interface IRestoreTransactionArgs {
  transactionId: string;
  user: IUser;
  deviceInfo: IDevice;
}
export const restoreTransaction = async ({
  transactionId,
  user,
  deviceInfo,
}: IRestoreTransactionArgs) => {
  if (transactionId === undefined) {
    return Promise.reject('Invalid Transaction Id');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const localTransaction = await getTransactionDB(transactionId);

  if (localTransaction === undefined) {
    return Promise.reject('Transaction not found');
  }

  const transactionRemote: ITransaction = {
    ...localTransaction,
    sms_status: 0,
    deleted: 0,
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
  };

  const transaction = {
    ...transactionRemote,
    sortDate: localTransaction.sortDate,
    dirty: 1,
  };

  try {
    // update in local DB
    await updateTransactionDB(transaction);
    await reconcileCustomerBalance(localTransaction.customer_id);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }

  await pushRemoteTransaction({
    transactionId,
    transaction,
    transactionRemote,
    bookId: localTransaction.book_id,
    attachments: [],
    userId: user.user_id,
  });

  return transaction;
};

interface IPushRemoteTransactionArgs {
  attachments: IAttachment[];
  userId: string;
  transactionRemote: ITransaction;
  transaction: ITransactionValue;
  transactionId: string;
  bookId: string;
}

const pushRemoteTransaction = ({
  bookId,
  transactionId,
  userId,
  transactionRemote,
  transaction,
  attachments,
}: IPushRemoteTransactionArgs) => {
  let updatedTransaction = transactionRemote;
  try {
    // attempting to upload images
    return uploadLocalAttachments(attachments, userId)
      .then((uploadedAttachments) => {
        if (uploadedAttachments.length === 0) {
          return;
        }
        const allAttachments =
          transactionRemote.attachments && transactionRemote.attachments?.length
            ? [...transactionRemote.attachments, ...uploadedAttachments]
            : [...uploadedAttachments];

        updatedTransaction = {
          ...transactionRemote,
          attachments: allAttachments,
        };
        return updateTransactionDB({
          ...transaction,
          attachments: allAttachments,
          localAttachments: [],
          hasLocalAttachments: 0,
          dirty: 1,
        });
      })
      .then(() => {
        // attempting to pus the transaction
        pushTransactions(bookId, [updatedTransaction]).then(async () => {
          const localTransaction = await getTransactionDB(transactionId);

          if (localTransaction === undefined) {
            return;
          }

          await updateTransactionDB({
            ...localTransaction,
            dirty: 0,
          });
        });
        return;
      });
  } catch (e) {
    if (e?.status === 401) {
      return e;
      // TODO - do something so that we can ask user to login
      // before next action
    }

    /** if remote API calls fail do nothing, we can sync later */
  }
};

export const getTransactions = getTransactionsDB;
export const getTransaction = getTransactionDB;
export const getRunningBalance = getRunningBalanceDB;
export const getDeletedTransactions = getDeletedTransactionsDB;
