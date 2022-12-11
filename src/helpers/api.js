import axios from 'axios';
import * as authOperations from 'redux/auth/auth-operations';

const BASE_URL = 'https://app-wallet.onrender.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

const token = {
  setAccessToken(accessToken) {
    instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  deleteAccessToken() {
    instance.defaults.headers.common.Authorization = '';
  },
};

let store;

export const injectStore = _store => {
  store = _store;
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.data.message === 'Not authorized') {
      try {
        const state = store.getState();
        const refreshToken = state.auth.refreshToken;
        const { data } = await instance.post('api/auth/refresh', {
          refreshToken,
        });
        token.setAccessToken(data.accessToken);
        await store.dispatch(
          authOperations.addToken({
            refreshToken: data.refreshToken,
            accessToken: data.accessToken,
          })
        );

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const performRegistration = async body => {
  const { data } = await instance.post('/api/auth/register', body);
  token.setAccessToken(data.accessToken);
  return data;
};

export const performLogin = async body => {
  const { data } = await instance.post('/api/auth/login', body);
  token.setAccessToken(data.accessToken);
  return data;
};

export const performLogout = async () => {
  await instance.post('/api/auth/logout');
  token.deleteAccessToken();
};

export const getCurrent = async () => {
  const { data } = await instance.get('/api/user/current');
  return data;
};

export const fetchStatistics = async body => {
  const { month, year } = body;
  const { data } = await instance.get(
    `/api/transactions/statistic?month=${month}&year=${year}`
  );
  return data;
};

export default instance;
