import * as api from 'helpers/api';

// import instance from 'helpers/api';

import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const result = await api.performRegistration(user);
      toast.success('Registration success');
      return result;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const result = await api.performLogin(user);
    toast.success('Login success');
    return result;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.performLogout();
    toast.success('Logout success');
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  try {
    const result = await api.getCurrent();
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addToken = createAsyncThunk('auth/token', async token => {
  return token;
});
