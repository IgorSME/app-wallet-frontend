import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/apiF05';

export const getTransactions = createAsyncThunk(
  'transactions/get',
  async (_, thunkApi) => {
    try {
      const result = await api.getTransactions();
      console.log(result);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// const isDuplicate = ({ name }, contacts) => {
//   const normalizedName = name.toLowerCase();

//   const result = contacts.find(item => {
//     return normalizedName === item.name.toLowerCase();
//   });

//   return Boolean(result);
// };

// export const addContact = createAsyncThunk(
//   'contacts/add',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.addContact(data);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
//   {
//     condition: (data, { getState }) => {
//       const { contacts } = getState();
//       if (isDuplicate(data, contacts.items)) {
//         alert(`${data.name} is alredy exist`);
//         return false;
//       }
//     },
//   }
// );

// export const removeContact = createAsyncThunk(
//   'contacts/remove',
//   async (id, { rejectWithValue }) => {
//     try {
//       await api.removeContact(id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
