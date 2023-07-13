import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/`,
    prepareHeaders: (headers, { getState }) => {},
  }),
  tagTypes: ["User", "Basket"],
  endpoints: () => ({}),
});
