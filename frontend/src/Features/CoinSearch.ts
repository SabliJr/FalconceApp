import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { iSearchCoin } from "../Types/interfaces";
import { iChartData } from "../Types/iCoinsData";

type tParams = {
  coinId: string;
  period: string;
  timeStamp?: string | null;
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

      getChartData: builder.query<iChartData, tParams>({
        query: (args) => {
          const { coinId, period, timeStamp } = args;
            return {
                  url: `/coins/${coinId}/market_chart?vs_currency=usd&days=${period}`,
                  params: {
                    interval: timeStamp
                  }
            }
        }
      }),
           
  }),
});

export const {
  useGetSearchCoinQuery, useGetChartDataQuery
} = SearchCoin;
