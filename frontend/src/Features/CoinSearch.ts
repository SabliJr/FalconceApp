import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { iSearchCoin } from "../Types/interfaces";

export const SearchCoin = createApi({
  reducerPath: "SearchCoin",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
  }),
  endpoints: (builder) => ({
     getSearchCoin: builder.query<iSearchCoin, string>({
      query: (coinId) => `/search?query=${coinId}`,
    }),
  }),
});

export const { useGetSearchCoinQuery } = SearchCoin;
