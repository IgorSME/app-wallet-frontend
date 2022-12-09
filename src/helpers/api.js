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
  return data;
};

export const performLogout = async () => {
  await instance.post('/api/auth/logout');
};
