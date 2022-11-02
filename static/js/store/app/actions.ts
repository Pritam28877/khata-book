// libs
import { useContext, useCallback } from 'react';

// context
import stateContext from 'src/store/context';

// constants
import { IAppActions } from './constants';

// defs
import { IUser, IDevice } from 'src/types/user';
import { SupportedLangsType } from 'src/types/locale';
import { IBookValue } from 'src/webWorkers/DB/types';

export const useAppActions = () => {
  const { dispatch } = useContext(stateContext);

  const setUser = useCallback(
    (payload?: IUser) => {
      dispatch({ type: IAppActions.APP_SET_USER, payload });
    },
    [dispatch]
  );

  const setCurrency = useCallback(
    (payload?: string) => {
      dispatch({ type: IAppActions.APP_SET_CURRENCY, payload });
    },
    [dispatch]
  );

  const setDevice = useCallback(
    (payload?: IDevice) => {
      dispatch({ type: IAppActions.APP_SET_DEVICE, payload });
    },
    [dispatch]
  );

  const setLocale = useCallback(
    (payload: SupportedLangsType) => {
      dispatch({ type: IAppActions.APP_SET_LOCALE, payload });
    },
    [dispatch]
  );

  const setOtpSent = useCallback(
    (payload: boolean) => {
      dispatch({ type: IAppActions.APP_OTP_SENT, payload });
    },
    [dispatch]
  );

  const setBook = useCallback(
    (payload?: IBookValue) => {
      dispatch({ type: IAppActions.APP_SET_BOOK, payload });
    },
    [dispatch]
  );

  return {
    setUser,
    setDevice,
    setOtpSent,
    setLocale,
    setBook,
    setCurrency,
  };
};
