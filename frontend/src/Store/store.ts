import { configureStore } from '@reduxjs/toolkit';
import { CoinsData } from '../Features/CoinsData';
import { SearchCoin } from '../Features/CoinSearch';

const store = configureStore({
  reducer: {
    [CoinsData.reducerPath]: CoinsData.reducer,
    [SearchCoin.reducerPath]: SearchCoin.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      CoinsData.middleware,
      SearchCoin.middleware
    ]),
  
});

export type AppDispatch = typeof store.dispatch;
export default store;
