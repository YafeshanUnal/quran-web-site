import { baseApi } from "src/store/api";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getQuran: build.query<string, string>({
    //   query: (countryId) => ({
    //     url: `_/`,
    //     method: "GET",
    //   }),
    // }),
    getSurah: build.query<ApiResponse<Surah>, string>({
      query: (surahId) => ({
        url: `_/surah/${surahId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSurahQuery } = extendedApi;
