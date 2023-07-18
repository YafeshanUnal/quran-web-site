import clsx from "clsx";
import React, { useState } from "react";

interface SearchBarProps {}

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={clsx("relative")}>
      <input
        type="text"
        placeholder="Ara..."
        className="px-4 py-2 w-48 rounded-md border focus:outline-none focus:ring-1 focus:ring-brand-primary"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
          onClick={() => {
            setSearchTerm("");
            onSearch("");
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

export default SearchBar;
