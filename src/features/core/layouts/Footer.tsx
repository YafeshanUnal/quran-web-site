import { MailIcon } from "../icons/MailIcon";

// create Footer
export const Footer = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-brand-gray">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-2">
          <a href="https://twitter.com/">
            <MailIcon className="h-6 w-6 text-gray-500 hover:text-brand-blue" />
          </a>
        </div>
      </div>
    </div>
  );
};
