import React, { useState, useEffect } from 'react';

import { fetchCurrency, getCorrectCurrency } from 'helpers';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { CurrencyTable, Loader } from 'components';

const CURRENCY_KEY = 'currency';
const CURRENCY_TIME_KEY = 'currencyTime';
const REFRESH_TIME = 36000;

export default function Currency() {
  const [currency, setCurrency] = useState(null);

  const [currencyStorage, setCurrencyStorage] = useLocalStorage(
    CURRENCY_KEY,
    ''
  );
  const [currencyTimeStorage, setCurrencyTimeStorage] = useLocalStorage(
    CURRENCY_TIME_KEY,
    ''
  );

  useEffect(() => {
    const isRefreshCurrency = Date.now() - currencyTimeStorage > REFRESH_TIME;

    if (!isRefreshCurrency) {
      setCurrency(currencyStorage);
      return;
    }

    const getCurrency = async () => {
      const data = await fetchCurrency();
      const currentData = getCorrectCurrency(data);

      setCurrency(currentData);
      setCurrencyStorage(currentData);
      setCurrencyTimeStorage(Date.now());
    };

    getCurrency();
  }, [
    currencyStorage,
    currencyTimeStorage,
    setCurrencyStorage,
    setCurrencyTimeStorage,
  ]);

  return currency ? <CurrencyTable currency={currency} /> : <Loader />;
}
