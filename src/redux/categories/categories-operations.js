import { createAsyncThunk } from '@reduxjs/toolkit';
import * as catApi from 'helpers/categoryApi';
import { toast } from 'react-toastify';

export const get = createAsyncThunk('category/get', async (_, thunkAPI) => {
  try {
    const result = await catApi.getCategory();
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const add = createAsyncThunk(
  'category/add',
  async (category, thunkAPI) => {
    try {
      const result = await catApi.addCategory(category);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const remove = createAsyncThunk(
  'category/remove',
  async (id, thunkAPI) => {
    try {
      await catApi.deleteCategory(id);
      return id;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
