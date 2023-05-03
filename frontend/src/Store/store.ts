import { configureStore } from '@reduxjs/toolkit';
import { CoinsData } from '../Features/CoinsData';

const store = configureStore({
  reducer: {
    [CoinsData.reducerPath]: CoinsData.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      CoinsData.middleware,
    ]),
  
});

export type AppDispatch = typeof store.dispatch;
export default store;
