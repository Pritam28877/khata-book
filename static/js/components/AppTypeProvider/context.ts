// libs
import { createContext, useContext } from 'react';

interface IAppTypeContext {
  isDesktop: boolean;
  isMobile: boolean;
}

const initialValue: IAppTypeContext = {
  isDesktop: false,
  isMobile: true,
};

const appTypeContext = createContext(initialValue);

export const useAppTypeContext = () => useContext(appTypeContext);

export default appTypeContext;
