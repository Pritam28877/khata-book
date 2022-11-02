// libs
import { createContext, useContext } from 'react';

// defs
import { SupportedLangsType, ITranslationOption } from './types';

interface ILanguageContext {
  t: (key: string, options?: ITranslationOption) => string;
  updateLocale: (locale: SupportedLangsType) => void;
}

const EMPTY_FUNC = () => {
  /** DO NOTHING */
};

const initialValue: ILanguageContext = {
  t: (key: string) => key,
  updateLocale: EMPTY_FUNC,
};

const languageContext = createContext(initialValue);

export const useLanguageContext = () => useContext(languageContext);

export default languageContext;
