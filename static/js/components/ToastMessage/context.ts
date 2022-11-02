// libs
import React, { createContext, useContext } from 'react';

// const
import { TOAST_TYPE } from './constants';

interface IToastMessageContext {
  showToastMessage: VoidFunction;
  setToastMessage: (message: string | React.ReactNode) => void;
  setToastActionHandler: (callBack: VoidFunction) => void;
  setShowViewButton: (showViewButton: boolean) => void;
  setToastType: (type: TOAST_TYPE) => void;
}

const EMPTY_FUNC = () => {
  /** DO NOTHING */
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VOID_FUNC = (arg: any) => {
  /** DO NOTHING */
};

const initialValue: IToastMessageContext = {
  showToastMessage: EMPTY_FUNC,
  setToastMessage: VOID_FUNC,
  setToastActionHandler: EMPTY_FUNC,
  setShowViewButton: VOID_FUNC,
  setToastType: VOID_FUNC,
};

const toastMessageContext = createContext(initialValue);

export const useToastMessageContext = () => useContext(toastMessageContext);

export default toastMessageContext;
