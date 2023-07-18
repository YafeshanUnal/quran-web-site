import { HomePageIcon } from "../icons/HomePageIcon";
import { Icon, IconButton } from "@mui/material";
import { HomeMini } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import { HoverMenu } from "../components/HoverMenu";
export const AppBar = () => {
  return (
    <nav className="flex flex-col gap-5 h-fit text-2xl text-brand-black w-full justify-between px-4 py-4 shadow-lg">
      {/* col-1 */}
      <div className="flex w-full justify-between items-center">
        {/* left side*/}
        <div className="">
          <Link href="/">
            <HomeIcon className="h-10 w-10" />
          </Link>
        </div>
        {/* center side*/}
        <div className="flex gap-4">
          <SearchBar />
        </div>
        {/* right side*/}
        <div className="">
          <Link
            href="/sureler"
            className="hover:text-brand-primary hover:animate-bounce "
          >
            Surah
          </Link>
        </div>
      </div>
      {/* col-2 */}
      <HoverMenu />
    </nav>
  );
};
// Compare this snippet from src\features\core\icons\HomePageIcon.tsx:
