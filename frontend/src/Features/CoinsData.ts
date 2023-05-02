import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { iCoins } from "../Types/iCoinsData";

export const CoinsData = createApi({
  reducerPath: "CoinsData",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    getCoinsData: builder.query<iCoins[], void>({
      query: () => "/coins",
    }),
  }),
});

export const { useGetCoinsDataQuery } = CoinsData;
