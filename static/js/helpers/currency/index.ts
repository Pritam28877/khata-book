import {
  getCurrencyCountry,
  getCurrencySymbol,
} from '@components/CurrencyDropDown/helpers';
import { STORAGE_CURRENCY_KEY, DEFAULT_CURRENCY } from 'src/constants/currency';
import { currencies } from 'src/constants/currency-codes';

export const getCurrency = (): string | null => {
  const currency = localStorage.getItem(STORAGE_CURRENCY_KEY);
  if (currency !== null) {
    return getCurrencySymbol(currency);
  }

  return getCurrencySymbol(DEFAULT_CURRENCY);
};

export const getCurrencyCountryName = (): string | null => {
  const currency = localStorage.getItem(STORAGE_CURRENCY_KEY);
  if (currency !== null) {
    return getCurrencyCountry(currency);
  }

  return getCurrencyCountry(DEFAULT_CURRENCY);
};

export const getCurrencyOption = () => {
  const currency =
    localStorage.getItem(STORAGE_CURRENCY_KEY) || DEFAULT_CURRENCY;
  const currencyLine = currencies[currency].split(',');
  return {
    id: `${currency}`,
    label: `${currencyLine[6]} - ${currencyLine[4]}`,
    line: currencies[currency],
  };
};

export const saveCurrency = (currency: string) => {
  localStorage.setItem(STORAGE_CURRENCY_KEY, currency);
};

export const hasCurrency = () => getCurrency() !== null;
