import Link from "next/link";
import { HomePageIcon } from "../icons/HomePageIcon";

export const AppBar = () => {
  return (
    <nav className="flex bg-amber-200 h-fit text-lg text-brand-black font-bold w-full justify-between px-4 py-4">
      {/* left side*/}
      <div className="">
        <Link href="/">
          <HomePageIcon className="h-6 w-6" />
        </Link>
      </div>
      {/* right side*/}
      <div className="">
        <Link href="/sureler" className="hover:text-brand-primary">
          Surah
        </Link>
      </div>
    </nav>
  );
};
// Compare this snippet from src\features\core\icons\HomePageIcon.tsx:
