import { configureStore } from '@reduxjs/toolkit';
import { cryptoStatus } from '../Features/statusSlice';
import { CoinsData } from '../Features/CoinsData';

const store = configureStore({
  reducer: {
    [cryptoStatus.reducerPath]: cryptoStatus.reducer,
    [CoinsData.reducerPath]: CoinsData.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cryptoStatus.middleware,
      CoinsData.middleware
    ]),
  
});

export type AppDispatch = typeof store.dispatch;
export default store;
