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

const authSlice = createSlice({
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
      state.user = payload;
    },
    [authOperations.register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.login.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user.email = payload.data.email;
      state.accessToken = payload.data.accessToken;
      state.refreshToken = payload.data.refreshToken;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
