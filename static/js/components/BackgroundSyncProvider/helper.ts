/**
 * This helper module helps me cache the sync status at global level
 * isolating it outside of React layers mount and ummount
 */

// helpers
import { captureException } from 'src/helpers/sentry';
import { syncStarted, syncDone } from 'src/helpers/sync';
import {
  dispatchCustomerChange,
  dispatchTransactionChange,
  dispatchInvoiceChange,
} from 'src/helpers/customEvents';

// web workers
import ApiWorker from 'src/webWorkers/Api';

// constants
import { FETCH_ERRORS } from 'src/webWorkers/Api/constants';
import { SENTRY_TAG } from 'src/constants/sentry';

export let isSynced = false;
export let isSyncing = false;
export let localSyncStatus = false;
export let localPromise: Promise<{
  status: boolean;
  error: FETCH_ERRORS;
}>;

export const sync = (token: string, userId: string) => {
  if (localPromise !== undefined) {
    return localPromise;
  }

  isSyncing = true;
  syncStarted();
  localPromise = ApiWorker.syncData(token, userId)
    .then((data) => {
      isSynced = true;
      isSyncing = false;
      localSyncStatus = data.status;
      return data;
    })
    .catch((e) => {
      captureException(e, {
        tags: {
          module: SENTRY_TAG.SYNC,
        },
        extra: {
          worker: 'SYNC_DATA',
        },
      });
      isSynced = false;
      isSyncing = false;
      return {
        status: false,
        error: FETCH_ERRORS.SOMETHING_WENT_WRONG,
        isBookUpdated: false,
        isCustomerUpdated: false,
        isTransactionUpdated: false,
        isInvoiceUpdated: false,
        isPayoutUpdated: false,
      };
    })
    .then((data) => {
      syncDone();
      if (data.isCustomerUpdated) {
        dispatchCustomerChange();
      }
      if (data.isTransactionUpdated) {
        dispatchTransactionChange();
      }
      if (data.isInvoiceUpdated) {
        dispatchInvoiceChange();
      }
      return data;
    });

  return localPromise;
};
