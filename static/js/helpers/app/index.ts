// helpers
import { getLocale } from 'src/helpers/locale';
import { getUserInfo, getDeviceInfo } from 'src/helpers/user';
import { getCurrentBook } from 'src/helpers/data';

export const getInitialAppStore = () => {
  const locale = getLocale();
  const userInfo = getUserInfo();
  const deviceInfo = getDeviceInfo();
  const currentBook = getCurrentBook();

  return {
    locale: locale !== null ? locale : undefined,
    userInfo: userInfo !== null ? userInfo : undefined,
    deviceInfo: deviceInfo !== null ? deviceInfo : undefined,
    currentBook: currentBook !== null ? currentBook : undefined,
  };
};
