import axios from 'axios';

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

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.data.message === 'Not authorized') {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const { data } = await instance.post('api/auth/refresh', {
          refreshToken,
        });
        console.log(data);

        token.setAccessToken(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return axios(error.config);
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
  localStorage.setItem('refreshToken', data.refreshToken);
  return data;
};

export const performLogin = async body => {
  const { data } = await instance.post('/api/auth/login', body);
  token.setAccessToken(data.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
  return data;
};

export const performLogout = async () => {
  await instance.post('/api/auth/logout');
  localStorage.setItem('refreshToken', '');
  token.deleteAccessToken();
};
