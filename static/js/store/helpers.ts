// reducers
import appReducer from './app/reducer';

// constants
import { IState, IActions } from './constants';

export const stateReducer = (
  oldState: IState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: IActions; payload?: any }
) => {
  const draftState = {
    ...oldState,
  };

  draftState.app = appReducer(draftState.app, action);

  return draftState;
};
