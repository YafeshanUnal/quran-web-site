import { useGetSalahTimesQuery } from "./store/salahService";

export const SalahPage = (props: SalahTimesRequest) => {
  const { data, isLoading } = useGetSalahTimesQuery(props);

  return (
    <main>
      <h1>SalahPage</h1>
      {/* You can use the data and isLoading variables here */}
      <h2>
        {props.city}
        {props.country}
        {props.date}
      </h2>
      {data?.timings?.Fajr}
    </main>
  );
};
