// constants
import { initialAppState, IAppActions, IAppState } from './app/constants';

export interface IState {
  app: IAppState;
}

export type IActions = IAppActions;

export const INITIAL_STATE: IState = {
  app: initialAppState,
};
