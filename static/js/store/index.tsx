// libs
import React, { useReducer, useMemo, memo } from 'react';

// contexts
import StateContext from './context';

// constants
import { INITIAL_STATE } from './constants';

// helpers
import { getInitialAppStore } from 'src/helpers/app';
import { stateReducer } from './helpers';
import { setFetchHeaders } from 'src/helpers/api';

// defs
interface IStateProviderProps {
  children: React.ReactNode;
}

const appState = getInitialAppStore();
const initialState = {
  ...INITIAL_STATE,
  app: {
    ...INITIAL_STATE.app,
    ...appState,
  },
};

if (appState.deviceInfo !== undefined) {
  setFetchHeaders({ 'x-khatabook-token': appState.deviceInfo.token });
}

function StateProvider({ children }: IStateProviderProps) {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const providerValues = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <StateContext.Provider value={providerValues}>
      {children}
    </StateContext.Provider>
  );
}

export default memo(StateProvider);
