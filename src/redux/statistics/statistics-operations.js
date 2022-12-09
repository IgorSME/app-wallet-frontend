import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/api';

const getDate = new Date();
const currentMonth = getDate
  .toLocaleString('en', { month: 'long' })
  .toLowerCase();
const currentYear = getDate.toLocaleString('en', { year: 'numeric' });

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
