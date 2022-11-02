import { currencies } from 'src/constants/currency-codes';

export interface ICurrencyConfig {
  id: string;
  label: string;
  line: string;
}

export const formatCurrencyOptions = () => {
  return Object.keys(currencies).map((currencyKey: string) => {
    const currencyLine = currencies[currencyKey].split(',');
    return {
      id: `${currencyKey}`,
      label: `${currencyLine[6]} - ${currencyLine[4]}`,
      line: currencies[currencyKey],
    };
  });
};

export const getCurrencySymbol = (currencyKey: string): string => {
  return currencies[currencyKey].split(',')[4];
};

export const getCurrencyCountry = (currencyKey: string): string => {
  return currencies[currencyKey].split(',')[6];
};
