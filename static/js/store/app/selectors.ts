// libs
import { useContext, useCallback } from 'react';

// context
import stateContext from 'src/store/context';

export const useAppState = () => {
  const { state } = useContext(stateContext);

  const isLoggedIn = useCallback(
    () => state.app.userInfo !== undefined,
    [state.app.userInfo]
  );

  const getUserInfo = useCallback(
    () => state.app.userInfo,
    [state.app.userInfo]
  );

  const getDeviceInfo = useCallback(
    () => state.app.deviceInfo,
    [state.app.deviceInfo]
  );

  const isOtpSent = useCallback(
    () => state.app.isOtpSent,
    [state.app.isOtpSent]
  );

  const hasLocale = useCallback(
    () => state.app.locale !== undefined,
    [state.app.locale]
  );

  const getLocale = useCallback(() => state.app.locale, [state.app.locale]);

  const getCurrentBook = useCallback(
    () => state.app.currentBook,
    [state.app.currentBook]
  );

  return {
    getUserInfo,
    getDeviceInfo,
    isLoggedIn,
    isOtpSent,
    hasLocale,
    getLocale,
    getCurrentBook,
  };
};
