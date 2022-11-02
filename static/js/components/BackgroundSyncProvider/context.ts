// libs
import { createContext, useContext } from 'react';

interface IBackgroundSyncContext {
  isSynced: boolean;
  localSyncStatus?: boolean;
}

const initalValue: IBackgroundSyncContext = {
  isSynced: false,
};

const backgroundSyncContext = createContext(initalValue);

export const useBackgroundSync = () => useContext(backgroundSyncContext);

export default backgroundSyncContext;
