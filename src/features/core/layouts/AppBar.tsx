import { HomePageIcon } from "../icons/HomePageIcon";
import { Icon, IconButton } from "@mui/material";
import { HomeMini } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
export const AppBar = () => {
  return (
    <nav className="flex bg-amber-200 h-fit text-2xl text-brand-black font-bold w-full justify-between px-4 py-4">
      {/* left side*/}
      <div className="">
        <Link href="/">
          <HomeIcon className="h-10 w-10" />
        </Link>
      </div>
      {/* right side*/}
      <div className="">
        <Link href="/sureler" className="hover:text-brand-primary hover:animate-bounce ">
          Surah
        </Link>
      </div>
    </nav>
  );
};
// Compare this snippet from src\features\core\icons\HomePageIcon.tsx:
