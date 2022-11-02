// constants
import { IAppActions, IAppState } from './constants';

// helpers
import { saveLocale } from 'src/helpers/locale';
import {
  saveUserInfo,
  saveDeviceInfo,
  clearDeviceInfo,
  clearUserInfo,
} from 'src/helpers/user';
import { saveCurrentBook, clearCurrentBook } from 'src/helpers/data';
import { saveCurrency } from 'src/helpers/currency';

const appReducer = (
  oldState: IAppState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: IAppActions; payload?: any }
) => {
  switch (action.type) {
    case IAppActions.APP_SET_USER: {
      // set local storage for next boot
      action.payload !== undefined
        ? saveUserInfo(action.payload)
        : clearUserInfo();
      return {
        ...oldState,
        userInfo: action.payload,
      };
    }

    case IAppActions.APP_SET_DEVICE: {
      // set local storage for next boot
      action.payload !== undefined
        ? saveDeviceInfo(action.payload)
        : clearDeviceInfo();
      return {
        ...oldState,
        deviceInfo: action.payload,
      };
    }

    case IAppActions.APP_OTP_SENT: {
      return {
        ...oldState,
        isOtpSent: action.payload,
      };
    }

    case IAppActions.APP_SET_LOCALE: {
      // save locale in localStorage
      saveLocale(action.payload);
      return {
        ...oldState,
        locale: action.payload,
      };
    }

    case IAppActions.APP_SET_CURRENCY: {
      // save locale in localStorage
      saveCurrency(action.payload);
      return {
        ...oldState,
        currency: action.payload,
      };
    }

    case IAppActions.APP_SET_BOOK: {
      action.payload !== undefined
        ? saveCurrentBook(action.payload)
        : clearCurrentBook();
      return {
        ...oldState,
        currentBook: action.payload,
      };
    }

    default: {
      return oldState;
    }
  }
};

export default appReducer;
