import clsx from "clsx";
import Image from "next/image";

interface SpinnerProps {
  className?: string;
}
export const Spinner = ({ className }: SpinnerProps) => (
  <div className={clsx("relative animate-spin select-none", className)}>
    <Image src="/spinner.png" alt="Loading..." fill />
  </div>
);
