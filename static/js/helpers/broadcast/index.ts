// constants
import { BROADCAST_KEY, ACTION_TYPES } from './constants';

// listener callbacks
import { onLoggingOut, onLoginStatusChange } from './listeners';

export const listenBroadcast = () => {
  const onStorageChange = (event: StorageEvent) => {
    if (event.key !== BROADCAST_KEY || event.newValue === null) {
      return;
    }

    try {
      const data = JSON.parse(event.newValue);

      switch (data.type) {
        case ACTION_TYPES.ON_LOGGING_OUT: {
          onLoggingOut();
          return;
        }

        case ACTION_TYPES.LOGIN_STATUS_CHANGE: {
          onLoginStatusChange();
          return;
        }
      }
    } catch (e) {
      /** DO NOTHING */
    }
  };
  window.addEventListener('storage', onStorageChange, false);
};
