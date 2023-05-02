import { configureStore } from '@reduxjs/toolkit';
import { cryptoStatus } from '../Features/statusSlice';

const store = configureStore({
  reducer: {
    [cryptoStatus.reducerPath]: cryptoStatus.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoStatus.middleware),
});

export type AppDispatch = typeof store.dispatch;
export default store;
