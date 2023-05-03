import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { iCoins, iCoin } from "../Types/iCoinsData";
import { iStatus } from "../Types/interfaces";

export const CoinsData = createApi({
  reducerPath: "CoinsData",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    getCryptoStatus: builder.query<iStatus[], void>({
      query: () => "/global-status",
    }),
    getCoinsData: builder.query<iCoins[], void>({
      query: () => "/coins",
    }),
    getCoinData: builder.query<iCoin, string>({
      query: (coinId) => `/coin?coinid=${coinId}`,
    }),
  }),
});

export const { useGetCoinsDataQuery, useGetCoinDataQuery, useGetCryptoStatusQuery } = CoinsData;
