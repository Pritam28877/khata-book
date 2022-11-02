// db
import { getRunningBalance as getRunningBalanceDB } from 'src/webWorkers/DB/transactions';
import { getCustomer, updateCustomer } from 'src/webWorkers/DB/customers';
import { getCustomerLastTransactionTime } from 'src/webWorkers/DB/customers';

// api
import { upload } from 'src/api/file';

export interface IAttachment {
  file: Blob;
  fileName: string;
}

export const reconcileCustomerBalance = async (customerId: string) => {
  // get local db customer
  const dbCustomer = await getCustomer(customerId);

  // if customer doesnt exist dont do anything
  // ideally this case should never come
  if (dbCustomer === undefined) {
    return;
  }

  // get local customer balance
  const balance = await getRunningBalanceDB({
    bookId: dbCustomer?.book_id || '',
    customerId: dbCustomer?.customer_id || '',
  });

  // get local customer last_transaction_time
  const last_transaction_time = await getCustomerLastTransactionTime({
    bookId: dbCustomer?.book_id || '',
    customerId: dbCustomer?.customer_id || '',
    lastTransactionTime: dbCustomer?.last_transaction_time || 0,
  });

  const newCustomer = {
    ...dbCustomer,
    balance,
    last_transaction_time,
  };

  // update local customer last transaction time
  // @ts-ignore
  await updateCustomer(newCustomer);
};

export const uploadLocalAttachments = async (
  attachments: IAttachment[],
  userId: string
) => {
  if (attachments.length === 0) {
    return [];
  }

  // attempting to upload image to S3
  try {
    const promises = attachments.map((attachment) =>
      upload({ file: attachment.file, fileName: attachment.fileName, userId })
    );

    const s3Urls = await Promise.all(promises);

    return s3Urls;
  } catch (e) {
    return Promise.reject(e);
  }
};
