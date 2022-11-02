// libs
import { createContext, useContext } from 'react';
import {
  DEFAULT_CURRENCY,
  DEFAULT_CURRENCY_COUNTRY,
} from 'src/constants/currency';

interface ICurrencyContext {
  currency: string;
  currencyCountry: string;
  updateCurrency: (currency: string) => void;
}

const EMPTY_FUNC = () => {
  /** DO NOTHING */
};

const initialValue: ICurrencyContext = {
  currency: DEFAULT_CURRENCY,
  currencyCountry: DEFAULT_CURRENCY_COUNTRY,
  updateCurrency: EMPTY_FUNC,
};

const currencyContext = createContext(initialValue);

export const useCurrencyContext = () => useContext(currencyContext);

export default currencyContext;
