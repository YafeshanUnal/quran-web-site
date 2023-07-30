import { HomePageIcon } from "../icons/HomePageIcon";
import { Icon, IconButton } from "@mui/material";
import { HomeMini } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import { HoverMenu } from "../components/HoverMenu";
import { QuranIcon } from "../icons/QuranIcon";
import { SalahIcon } from "../icons/SalahIcon";
export const AppBar = () => {
  return (
    <nav className="flex flex-col gap-5 h-fit text-2xl text-brand-black w-full justify-between px-4 py-4 shadow-lg sticky top-0 z-50 bg-brand-white">
      <div className="flex w-full justify-between items-center">
        <div className="">
          <Link href="/">
            <HomeIcon className="h-10 w-10" />
          </Link>
        </div>
        <div className="flex gap-4">
          <SearchBar />
        </div>
        <div className="flex gap-4 c">
          <Link href="/sureler/1" className="flex gap-4">
            <QuranIcon />
            Surah
          </Link>
        </div>
        <div className="flex gap-4 c">
          <Link href="/sureler/1" className="flex gap-4">
            <SalahIcon className="bg-black" />
            Salah
          </Link>
        </div>
      </div>
      <HoverMenu />
    </nav>
  );
};
// Compare this snippet from src\features\core\icons\HomePageIcon.tsx:
