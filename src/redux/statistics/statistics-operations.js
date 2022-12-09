import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/api';

const getDate = new Date();

const currentMonth = getDate.getMonth() + 1;
const currentYear = getDate.getFullYear();

export const fetchStatistics = createAsyncThunk(
  'transactions/statistics',
  async (params, thunkAPI) => {
    const { month = currentMonth, year = currentYear } = params;

    try {
      const result = await api.fetchStatistics({ month, year });
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
