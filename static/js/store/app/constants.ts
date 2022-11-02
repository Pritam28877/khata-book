// defs
import { IUser, IDevice } from 'src/types/user';
import { SupportedLangsType } from 'src/types/locale';
import { IBookValue } from 'src/webWorkers/DB/types';

export enum IAppActions {
  APP_SET_USER = 'app/set_user',
  APP_SET_DEVICE = 'app/set_device',
  APP_OTP_SENT = 'app/otp_sent',
  APP_SET_LOCALE = 'app/set_locale',
  APP_SET_BOOK = 'app/set_book',
  APP_SET_CURRENCY = 'app/set_currency',
}

export interface IAppState {
  userInfo?: IUser;
  deviceInfo?: IDevice;
  locale?: SupportedLangsType;
  isOtpSent: boolean;
  currentBook?: IBookValue;
  currentCurrency?: string;
}

export const initialAppState: IAppState = {
  isOtpSent: false,
};
