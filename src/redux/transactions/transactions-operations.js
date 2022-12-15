import * as transactionsApi from 'helpers/transactionsApi';

import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllTransactions = createAsyncThunk(
  'transactions/get',
  async (body, thunkAPI) => {
    try {
      const result = await transactionsApi.getAllTransactions(body);
      return result;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/add',
  async (transaction, thunkAPI) => {
    try {
      const result = await transactionsApi.addTransaction(transaction);
      toast.success('Transaction added success');
      return result;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTransactionById = createAsyncThunk(
  'transactions/update',
  async ({ id, body }, thunkAPI) => {
    try {
      const result = await transactionsApi.updateTransactionById(id, body);
      toast.success('Transaction updated success');
      return result;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
