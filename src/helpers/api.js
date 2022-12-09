import axios from 'axios';

const BASE_URL = 'https://app-wallet.onrender.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const performRegistration = async body => {
  const { data } = await instance.post('/api/auth/register', body);
  setToken(data.accessToken);
  return data;
};

export const performLogin = async body => {
  const { data } = await instance.post('/api/auth/login', body);
  setToken(data.accessToken);

  return data;
};

export const performLogout = async () => {
  await instance.post('/api/auth/logout');
  setToken();
};

export const fetchStatistics = async body => {
  const { month, year } = body;

  const { data } = await instance.get(
    `/api/transactions/statistic?month=${month}&year=${year}`
  );
  return data;
};
