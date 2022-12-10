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
