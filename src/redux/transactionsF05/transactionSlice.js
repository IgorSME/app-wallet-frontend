import { createSlice } from '@reduxjs/toolkit';

import { getTransactions } from './transactions-operations';

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: {
    [getTransactions.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getTransactions.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.transactions = payload;
    },
    [getTransactions.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default transactionSlice.reducer;
