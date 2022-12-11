import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from 'redux/auth/authSlice';
import transactionReducer from 'redux/transactions/transactionSlice';
import statisticsReducer from './statistics/statisticsSlice';
import { injectStore } from 'helpers/api';

const persistConfig = {
  key: 'auth',
  whitelist: ['accessToken', 'refreshToken'],
  storage,
};

const persisterReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persisterReducer,
    transactions: transactionReducer,
    statistics: statisticsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

injectStore(store);

export const persistor = persistStore(store);
