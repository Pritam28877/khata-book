// constants
import {
  STORAGE_USER_KEY,
  STORAGE_DEVICE_KEY,
  ON_BOARDING_PHONE,
  ON_BOARDING_BUSINESS_NAME,
  ON_BOARDING_COUNTRY_CODE,
  ON_BOARDING_OTP,
  ON_BOARDING_ENABLE_USER_PREF,
  ON_BOARDING_OTP_TIMER,
} from 'src/constants/user';
import { INDIAN_COUNTRY_CODE } from 'src/constants/phone';

// defs
import { IUser, IDevice } from 'src/types/user';

export const getUserInfo = () => {
  const userInfo = localStorage.getItem(STORAGE_USER_KEY);

  if (userInfo === null) {
    return null;
  }

  try {
    return JSON.parse(userInfo);
  } catch (e) {
    return null;
    /** TODO - add exception */
  }
};

export const getDeviceInfo = () => {
  const deviceInfo = localStorage.getItem(STORAGE_DEVICE_KEY);

  if (deviceInfo === null) {
    return null;
  }

  try {
    return JSON.parse(deviceInfo);
  } catch (e) {
    return null;
    /** TODO - add exception */
  }
};

export const saveUserInfo = (userInfo: IUser) => {
  localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(userInfo));
};

export const saveDeviceInfo = (deviceInfo: IDevice) => {
  localStorage.setItem(STORAGE_DEVICE_KEY, JSON.stringify(deviceInfo));
};

export const clearDeviceInfo = () =>
  localStorage.removeItem(STORAGE_DEVICE_KEY);

export const clearUserInfo = () => localStorage.removeItem(STORAGE_USER_KEY);

export const isUserLoggedIn = () => getUserInfo() !== null;

export const clearOnboardingInfo = () => {
  localStorage.removeItem(ON_BOARDING_BUSINESS_NAME);
  localStorage.removeItem(ON_BOARDING_COUNTRY_CODE);
  localStorage.removeItem(ON_BOARDING_PHONE);
  localStorage.removeItem(ON_BOARDING_OTP);
  localStorage.removeItem(ON_BOARDING_ENABLE_USER_PREF);
  localStorage.removeItem(ON_BOARDING_OTP_TIMER);
};

export const isIndianPhoneNumberUser = () => {
  const userInfo = getUserInfo();
  return userInfo?.country_code === INDIAN_COUNTRY_CODE;
};
