import { createSlice } from '@reduxjs/toolkit';
import * as categoryOperations from 'redux/categories/categories-operations';

const initialState = {
  categories: {},
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [categoryOperations.get.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [categoryOperations.get.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
    },
    [categoryOperations.get.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [categoryOperations.add.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [categoryOperations.add.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const category = payload.category;
      state.categories.userCategories = {
        category,
        ...state.categories.userCategories,
      };
    },
    [categoryOperations.add.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [categoryOperations.remove.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [categoryOperations.remove.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories.userCategories = state.categories.userCategories.filter(
        el => el._id !== payload
      );
    },
    [categoryOperations.remove.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default categorySlice.reducer;
