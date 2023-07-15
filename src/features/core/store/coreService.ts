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
        url: `quran/surah/${surahId}`,
        method: "GET",
      }),
    }),
    getRandomHadith: build.query<ApiResponse<Hadith>, void>({
      query: () => ({
        url: `hadith/hadiths/random`,
        method: "GET",
        headers: {
          "x-api-key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk",
        },
      }),
    }),
    getRandomAyah: build.query<ApiResponse<Ayah>, GetRandomAyahRequest>({
      query: ({ surah, verse }) => ({
        url: `quran/surah/${surah}/verse/${verse}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSurahQuery, useGetRandomHadithQuery, useGetRandomAyahQuery } =
  extendedApi;
