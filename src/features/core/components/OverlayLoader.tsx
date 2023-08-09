import { Spinner } from "./Spinner";

interface OverlayLoaderProps {
  className?: string;
}
export const OverlayLoader = ({ className }: OverlayLoaderProps) => {
  return (
    <div className={className}>
      <div
        className={
          "fixed inset-0 z-50 flex select-none items-center justify-center bg-brand-black bg-opacity-30"
        }
      >
        <div className="m-auto">
          <Spinner className="h-14 w-14" />
        </div>
      </div>
    </div>
  );
};
