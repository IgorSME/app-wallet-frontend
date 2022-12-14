import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';

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
      try {
        const data = await fetchCurrency();
        const currentData = getCorrectCurrency(data);

        setCurrency(currentData);
        setCurrencyStorage(currentData);
        setCurrencyTimeStorage(Date.now());
      } catch (error) {
        // toast.error('No connection. try later.');
      }
    };

    getCurrency();
  }, []);

  return currency ? <CurrencyTable currency={currency} /> : <Loader />;
}
