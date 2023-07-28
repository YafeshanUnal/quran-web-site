import { baseApi } from "src/store/api";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // https://everyayah.com/data/recitations.js
    getHafizList: build.query<HafisListModel[], void>({
      query: () => ({
        url: `https://everyayah.com/data/recitations.js`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetHafizListQuery } = extendedApi;
