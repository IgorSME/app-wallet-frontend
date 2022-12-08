import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'redux/auth/authSlice';
import transactionReducer from 'redux/transactions/transactionSlice';
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
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
