// libs
import { createContext, Dispatch } from 'react';

// constants
import { INITIAL_STATE, IActions, IState } from './constants';

// defs
interface IStateContext {
  state: IState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<{ type: IActions; payload?: any }>;
}

const EMPTY_FUNC = () => {
  /** DO NOTHING */
};

const initialValue: IStateContext = {
  state: INITIAL_STATE,
  dispatch: EMPTY_FUNC,
};

export default createContext(initialValue);
