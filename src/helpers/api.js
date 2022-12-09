import axios from 'axios';

const BASE_URL = 'https://app-wallet.onrender.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const performRegistration = async body => {
  const { data } = await instance.post('/api/auth/register', body);
  return data;
};

export const performLogin = async body => {
  const { data } = await instance.post('/api/auth/login', body);
  console.log(data);
  return data;
};

// export const addBook = async data => {
//   const { data: result } = await instance.post('/books', data);
//   return result;
// };

// export const removeBook = async id => {
//   const { data: result } = await instance.delete(`/books/${id}`);
//   return result;
// };

export const fetchStatistics = async body => {
  const { month, year } = body;

  const { data } = await instance.get(
    `/api/transactions/statistic?month=${month}&year=${year}`
  );
  return data;
};
