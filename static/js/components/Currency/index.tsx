import { useCurrencyContext } from '@components/CurrencyProvider/context';
import React, { memo } from 'react';

/**
 * This is placeholder component to support multi currency
 */
function Currency() {
  const { currency } = useCurrencyContext();
  return <>{currency}</>;
}

export default memo(Currency);
