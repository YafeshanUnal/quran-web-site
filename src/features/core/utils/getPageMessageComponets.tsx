import { OverlayLoader } from "../components/OverlayLoader";

export const getPageMessageComponent = (
  isLoading: boolean,
  error: unknown,
  isDataMissing: boolean,
) => {
  if (isLoading) {
    return <OverlayLoader />;
  }

  if (error) {
    return (
      <>
        <h2>Error</h2>Error
      </>
    );
  }

  if (isDataMissing) {
    return <div>No data</div>;
  }

  return null;
};
