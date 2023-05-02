import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { iStatus } from "../Types/interfaces";

export const cryptoStatus = createApi({
  reducerPath: "cryptoStatus",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    getCryptoStatus: builder.query<iStatus[], void>({
      query: () => "/global-status",
    }),
  }),
});

export const { useGetCryptoStatusQuery } = cryptoStatus;
