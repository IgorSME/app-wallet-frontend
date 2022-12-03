const BASE_URL = 'https://api.monobank.ua/bank/currency';
// const BASE_URL =
//   'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

async function handlingResponseStatus(url = '') {
  const response = await fetch(url);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error(response.message));
}

export function fetchCurrency() {
  return handlingResponseStatus(BASE_URL);
}
