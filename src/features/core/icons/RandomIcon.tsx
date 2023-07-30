import clsx from "clsx";

export const RandomIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={clsx("fill-current", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 18V6M16 6L20 10.125M16 6L12 10.125M8 6V18M8 18L12 13.875M8 18L4 13.875"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};