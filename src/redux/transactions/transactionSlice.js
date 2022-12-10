import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations';

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
    [transactionsOperations.getAllTransactions.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [transactionsOperations.getAllTransactions.fulfilled]: (
      state,
      { payload }
    ) => {
      state.transactions = payload.transactions;
      state.loading = false;
    },
    [transactionsOperations.getAllTransactions.rejected]: (
      state,
      { payload }
    ) => {
      state.loading = false;
      state.error = payload;
    },
    [transactionsOperations.addTransaction.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [transactionsOperations.addTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = [...state.transactions, payload.transaction];
      state.loading = false;
    },
    [transactionsOperations.addTransaction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [transactionsOperations.updateTransactionById.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [transactionsOperations.updateTransactionById.fulfilled]: state => {
      state.loading = false;
    },
    [transactionsOperations.updateTransactionById.rejected]: (
      state,
      { payload }
    ) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default transactionSlice.reducer;
