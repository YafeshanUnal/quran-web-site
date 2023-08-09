import { baseApi } from "src/store/api";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSalahTimes: build.query<SalahTime, SalahTimesRequest>({
      query: (props) => ({
        url: `http://api.aladhan.com/v1/timingsByCity/${props.date}?city=${props.city}&country=${props.country}&method=13`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSalahTimesQuery } = extendedApi;
