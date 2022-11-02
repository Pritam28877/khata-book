// helpers
import { setFetchHeaders } from 'src/helpers/api';
import { pushDirtyData } from './pushData';
import { fetchNewData } from './fetchData';
import { getCurrentTime } from './helpers';

// db
import {
  getAllBookSyncInfo,
  updateBookSyncInfoBulk,
} from 'src/webWorkers/DB/bookSyncInfo';
import { getBook } from 'src/webWorkers/DB/books';
import { getActiveCustomerBook } from 'src/webWorkers/DB/customers';

// constants
import { FETCH_ERRORS } from './constants';
import { X_KB_APP_VERSION } from 'src/constants/appInfo';

const updateSyncTime = async () => {
  const syncInfo = await getAllBookSyncInfo();
  const newSyncInfo = syncInfo.map((info) => ({
    ...info,
    lastSyncAt: getCurrentTime(),
  }));

  await updateBookSyncInfoBulk(newSyncInfo);
};

export const syncData = async (token: string, userId: string) => {
  setFetchHeaders({
    'x-khatabook-token': token,
    'x-kb-app-version': X_KB_APP_VERSION,
  });

  let updateStatus = {
    isBookUpdated: false,
    isCustomerUpdated: false,
    isTransactionUpdated: false,
    isInvoiceUpdated: false,
    isPayoutUpdated: false,
  };

  try {
    // NOTE: sequence of request is important
    await pushDirtyData(userId);
    updateStatus = await fetchNewData();
    await updateSyncTime();
  } catch (e) {
    let error;
    if (e.status === 401) {
      error = FETCH_ERRORS.LOGIN_FAILED;
    } else {
      error = FETCH_ERRORS.SOMETHING_WENT_WRONG;
    }

    return {
      status: false,
      error,
      ...updateStatus,
    };
  }

  return { status: true, error: FETCH_ERRORS.NONE, ...updateStatus };
};

export const mostActiveBook = async () => {
  const bookId = await getActiveCustomerBook();

  if (bookId === undefined) {
    return undefined;
  }

  return await getBook(bookId);
};
