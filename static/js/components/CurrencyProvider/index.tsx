// libs
import React, { useState, useCallback, useMemo, memo } from 'react';
import { getCurrencySymbol } from '@components/CurrencyDropDown/helpers';

// context
import CurrencyContext from './context';

// actions
import { useAppActions } from 'src/store/app/actions';
import { getCurrency, getCurrencyCountryName } from 'src/helpers/currency';
import {
  DEFAULT_CURRENCY,
  DEFAULT_CURRENCY_COUNTRY,
} from 'src/constants/currency';

interface ICurrencyProviderProps {
  children?: React.ReactNode;
}

function CurrencyProvider({ children }: ICurrencyProviderProps) {
  const [currentCurrency, setCurrentCurrency] = useState<string>(
    getCurrency() || DEFAULT_CURRENCY
  );
  const { setCurrency } = useAppActions();

  const updateCurrency = useCallback(
    (currency: string) => {
      setCurrentCurrency(getCurrencySymbol(currency));
      setCurrency(currency);
    },
    [setCurrency, setCurrentCurrency]
  );

  const contextValue = useMemo(
    () => ({
      currency: currentCurrency,
      currencyCountry: getCurrencyCountryName() || DEFAULT_CURRENCY_COUNTRY,
      updateCurrency,
    }),
    [currentCurrency, updateCurrency]
  );

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default memo(CurrencyProvider);
