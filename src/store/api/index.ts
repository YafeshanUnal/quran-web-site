import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/`,
    prepareHeaders: (headers, { getState }) => {
      // Diğer başlık ayarlarını buraya ekleyebilirsiniz
      return headers;
    },
  }),
  tagTypes: ["User", "Basket"],
  endpoints: () => ({}),
});
