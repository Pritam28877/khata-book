// libs
import { createContext, useContext } from 'react';

interface IErrorContext {
  showError: VoidFunction;
}

const EMPTY_FUNC = () => {
  /** DO NOTHING */
};

const initialValue: IErrorContext = {
  showError: EMPTY_FUNC,
};

const errorContext = createContext(initialValue);

export const useErrorContext = () => useContext(errorContext);

export default errorContext;
