import axios from 'axios';
import * as authOperations from 'redux/auth/auth-operations';

axios.defaults.baseURL = 'https://app-wallet.onrender.com';

export * from './categoryApi';
export * from './transactionsApi';

const token = {
  setAccessToken(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  deleteAccessToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

let store;

export const injectStore = _store => {
  store = _store;
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 412) {
      try {
        const state = store.getState();
        const refreshToken = state.auth.refreshToken;
        const { data } = await axios.post('api/auth/refresh', {
          refreshToken,
        });
        token.setAccessToken(data.accessToken);
        await store.dispatch(
          authOperations.addToken({
            refreshToken: data.refreshToken,
            accessToken: data.accessToken,
          })
        );

        //return axios(error.config);
      } catch (error) {
        store.dispatch(authOperations.logout());
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const performRegistration = async body => {
  const { data } = await axios.post('/api/auth/register', body);
  token.setAccessToken(data.accessToken);
  return data;
};

export const performLogin = async body => {
  const { data } = await axios.post('/api/auth/login', body);
  token.setAccessToken(data.accessToken);
  return data;
};

export const performLogout = async () => {
  await axios.post('/api/auth/logout');
  token.deleteAccessToken();
};

export const getCurrent = async () => {
  const state = store.getState();
  const accessToken = state.auth.accessToken;
  token.setAccessToken(accessToken);
  const { data } = await axios.get('/api/user/current');
  return data;
};

export const fetchStatistics = async body => {
  const { month, year } = body;

  const { data } = await axios.get(
    `/api/transactions/statistic?month=${month}&year=${year}`
  );
  return data;
};
