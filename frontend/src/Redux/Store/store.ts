import { configureStore } from '@reduxjs/toolkit';
import { CoinsData } from '../Features/CoinsData';
import { SearchCoin } from '../Features/CoinSearch';
import listReducer from '../Features/WatchListStore';
import PortfolioReducer from '../Features/PortfolioStore';

const store = configureStore({
  reducer: {
    [CoinsData.reducerPath]: CoinsData.reducer,
    [SearchCoin.reducerPath]: SearchCoin.reducer,
    WatchList: listReducer,
    PortfolioStore: PortfolioReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      CoinsData.middleware,
      SearchCoin.middleware
    ]),
  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;
