import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { iSearchCoin } from "../Types/interfaces";
import { iChartData } from "../Types/iCoinsData";

type tParams = {
  coinId: string;
  period: string;
  timeStamp?: string;
}

export const SearchCoin = createApi({
  reducerPath: "SearchCoin",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
  }),
  endpoints: (builder) => ({
     getSearchCoin: builder.query<iSearchCoin, string>({
      query: (coinId) => `/search?query=${coinId}`,
     }),
    
    //Getting Chart Data
      getChartData: builder.query<iChartData, tParams>({
      query: ({coinId, period, timeStamp}) => `/coins/${coinId}/market_chart?vs_currency=usd&days=${period}&interval=${timeStamp}`,
      }),
      
      //Getting Chart data by time
      getMonthChart: builder.query<iChartData, tParams>({
      query: ({coinId, period }) => `/coins/${coinId}/market_chart?vs_currency=usd&days=${period}`,
    }),
     get90DaysChart: builder.query<iChartData, tParams>({
      query: ({coinId, period, timeStamp}) => `/coins/${coinId}/market_chart?vs_currency=usd&days=${period}&interval=${timeStamp}`,
     }),
       get6MonthChart: builder.query<iChartData, tParams>({
      query: ({coinId, period, timeStamp}) => `/coins/${coinId}/market_chart?vs_currency=usd&days=${period}&interval=${timeStamp}`,
       }),
         get1YrChart: builder.query<iSearchCoin, tParams>({
      query: ({coinId, period, timeStamp}) => `/coins/${coinId}/market_chart?vs_currency=usd&days=${period}&interval=${timeStamp}`,
    }),
  }),
});

export const { useGetSearchCoinQuery, useGet1YrChartQuery, useGet6MonthChartQuery, useGet90DaysChartQuery, useGetMonthChartQuery, useGetChartDataQuery } = SearchCoin;
