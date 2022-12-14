import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from 'redux/auth/auth-operations';

const initialState = {
  user: { name: '', email: '' },
  isLoggedIn: false,
  loading: false,
  error: null,
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [authOperations.register.pending]: state => {
      state.error = null;
      state.loading = true;
    },
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.logout.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.logout.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user.email = '';
      state.user.name = '';
      state.accessToken = '';
      state.refreshToken = '';
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.current.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.current.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.user.email = payload.user.email;
      // state.user.name = payload.user.name;
      state.user = { ...payload.user };
      state.isLoggedIn = true;
    },
    [authOperations.current.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.addToken.fulfilled]: (state, { payload }) => {
      state.refreshToken = payload.refreshToken;
      state.accessToken = payload.accessToken;
    },
  },
});

export default authSlice.reducer;
