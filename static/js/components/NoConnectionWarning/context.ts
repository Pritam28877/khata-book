// libs
import { createContext, useContext } from 'react';

interface INoConnection {
  showNoConnection: boolean;
}

const initialValue: INoConnection = {
  showNoConnection: false,
};

const noConnectionContext = createContext(initialValue);

export const useNoConnectionContext = () => useContext(noConnectionContext);

export default noConnectionContext;
