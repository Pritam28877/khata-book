// libs
import { createContext, useContext } from 'react';

// defs
interface IActionContext {
  selectedCustomerId: string;
  onClick: (customerId: string) => void;
}

const EMPTY_FUNC = () => {
  /** DO NOTHING */
};

const initialValue: IActionContext = {
  selectedCustomerId: '',
  onClick: EMPTY_FUNC,
};

const actionContext = createContext(initialValue);

export const useBookActionContext = () => useContext(actionContext);

export default actionContext;
