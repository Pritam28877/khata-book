// constants
import { STORAGE_SYNC_DATA } from 'src/constants/data';

let canStoreCache: boolean | undefined;

const TEMP_KEY = 'KB_STORAGE_TEST';
const TEMP_DATA = 'TEST_DATA';
const RE_SYNC_TIME_DIFF = 60 * 60 * 1000; // 60 min
const ONLOAD_RE_SYNC_TIME_DIFF = 10 * 1000; // 10 seconds

interface ISyncInfo {
  isSyncing: boolean;
  syncStartTime?: number;
  lastSyncTime?: number;
}

// Test if we can use localstorage
const canStore = () => {
  if (canStoreCache !== undefined) {
    return canStoreCache;
  }

  window.localStorage.setItem(TEMP_KEY, TEMP_DATA);
  const storedData = window.localStorage.getItem(TEMP_KEY);

  canStoreCache = storedData === TEMP_DATA;
  return canStoreCache;
};

export const canSync = (isOnload = false) => {
  if (canStore() === false) {
    return false;
  }

  const syncInfo = window.localStorage.getItem(STORAGE_SYNC_DATA);

  // if no data stored mean we can start syncing
  if (syncInfo === null) {
    return true;
  }

  try {
    const info: ISyncInfo = JSON.parse(syncInfo);
    const currentTime = new Date().getTime();

    const syncTimeDiff = isOnload
      ? ONLOAD_RE_SYNC_TIME_DIFF
      : RE_SYNC_TIME_DIFF;

    // if sync is active dont do anything
    if (
      info.isSyncing &&
      info.syncStartTime !== undefined &&
      currentTime - info.syncStartTime < syncTimeDiff
    ) {
      return false;
    }

    // if we synced in last X min do not do anything
    if (
      info.isSyncing === false &&
      info.lastSyncTime !== undefined &&
      currentTime - info.lastSyncTime < syncTimeDiff
    ) {
      return false;
    }

    return true;
  } catch (e) {
    return false;
  }
};

export const syncStarted = () => {
  if (canStore() === false) {
    return;
  }

  const info = {
    isSyncing: true,
    syncStartTime: new Date().getTime(),
  };

  window.localStorage.setItem(STORAGE_SYNC_DATA, JSON.stringify(info));
};

export const syncDone = () => {
  if (canStore() === false) {
    return;
  }

  const info = {
    lastSyncTime: new Date().getTime(),
    isSyncing: false,
  };

  window.localStorage.setItem(STORAGE_SYNC_DATA, JSON.stringify(info));
};
