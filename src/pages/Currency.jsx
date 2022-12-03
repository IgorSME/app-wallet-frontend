import React, { useState, useEffect } from 'react';

import { fetchCurrency, getCorrectCurrency } from 'helpers';
import { useLocalStorage } from 'hooks/useLocalStorage';

const CURRENCY_KEY = 'currency';
const CURRENCY_TIME_KEY = 'currencyTime';
const REFRESH_TIME = 36000;

export default function Currency() {
  const [currency, setCurrency] = useState([]);

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
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Purchase</th>
          <th>Sale</th>
        </tr>
      </thead>
      <tbody>
        {currency &&
          currency.map(({ ccy, buy, sell }) => (
            <tr key={ccy}>
              <td>{ccy}</td>
              <td>{Number(buy)}</td>
              <td>{Number(sell)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
