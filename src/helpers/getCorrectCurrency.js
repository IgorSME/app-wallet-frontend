import countriesCode from 'assets/data/countriesCode.json';

export function getCorrectCurrency(arr) {
  const getRightCurrencies = arr
    .filter(
      ({ rateBuy, rateSell, currencyCodeB }) =>
        rateBuy && rateSell && currencyCodeB === 980
    )
    .map(({ currencyCodeA, rateBuy, rateSell }) => ({
      ccy: countriesCode[currencyCodeA],
      buy: rateBuy.toFixed(2),
      sell: rateSell.toFixed(2),
    }));

  return getRightCurrencies;
}
