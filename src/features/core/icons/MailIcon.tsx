export const MailIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={`bytesize-mail ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1.5 4.5L12 12L22.5 4.5M1.5 19.5H22.5V4.5H1.5V19.5Z"
        stroke="#1B1C1E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
