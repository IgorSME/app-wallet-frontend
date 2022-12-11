import { createSlice } from '@reduxjs/toolkit';

import { fetchStatistics } from './statistics-operations';

const initialState = {
  statistics: {
    allCategories: [],
    typesTotalSum: [],
  },
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: {
    [fetchStatistics.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchStatistics.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.statistics = payload;
    },
    [fetchStatistics.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default statisticsSlice.reducer;
