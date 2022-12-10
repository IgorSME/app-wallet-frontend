import axios from 'axios';

const BASE_URL = 'https://app-wallet.onrender.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTransactions = async () => {
  const { data } = await instance.get('/api/transactions');
  console.log(data);

  return data;
};
