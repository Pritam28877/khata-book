// constants
import { BROADCAST_KEY, ACTION_TYPES } from './constants';

export const onLoggingOut = () => {
  window.localStorage.setItem(
    BROADCAST_KEY,
    JSON.stringify({
      type: ACTION_TYPES.ON_LOGGING_OUT,
      time: new Date().getTime(),
    })
  );
};

export const loginStatusChanged = () => {
  window.localStorage.setItem(
    BROADCAST_KEY,
    JSON.stringify({
      type: ACTION_TYPES.LOGIN_STATUS_CHANGE,
      time: new Date().getTime(),
    })
  );
};

export const clearBroadcast = () => {
  window.localStorage.removeItem(BROADCAST_KEY);
};
