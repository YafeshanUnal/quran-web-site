import { MailIcon } from "../icons/MailIcon";

// create Footer
export const Footer = () => {
  return (
    <div className="flex  h-20 bg-brand-white shadow-lg text-brand-black w-full items-center dbg px-4 py-4 z-50">
      <div className="flex flex-col items-center w-full justify-center">
        <div className="flex gap-2">
          <a href="https://twitter.com/">
            <MailIcon className="h-6 w-6 text-gray-500 hover:text-brand-blue" />
          </a>
        </div>
      </div>
    </div>
  );
};
