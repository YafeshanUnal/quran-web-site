import Link from "next/link";
import { useState } from "react";

export const HoverMenu = () => {
  const categories = [
    {
      id: "1",
      code: "Sureler",
      definition: "Sureler",
      subCategories: [
        {
          id: "1",
          code: "1",
          definition: "Fatiha",
        },
        {
          id: "2",
          code: "2",
          definition: "Bakara",
        },
        {
          id: "3",
          code: "3",
          definition: "Al-i İmran",
        },
        {
          id: "4",
          code: "4",
          definition: "Nisa",
        },
        {
          id: "5",
          code: "5",
          definition: "Maide",
        },
        {
          id: "6",
          code: "6",
          definition: "En'am",
        },
        {
          id: "7",
          code: "7",
          definition: "Araf",
        },
        {
          id: "8",
          code: "8",
          definition: "Enfal",
        },
        {
          id: "9",
          code: "9",
          definition: "Tevbe",
        },
        {
          id: "10",
          code: "10",
          definition: "Yunus",
        },
        {
          id: "11",
          code: "11",
          definition: "Hud",
        },
        {
          id: "12",
          code: "12",
          definition: "Yusuf",
        },
        {
          id: "13",
          code: "13",
          definition: "Rad",
        },
        {
          id: "14",
          code: "14",
          definition: "İbrahim",
        },
        {
          id: "15",
          code: "15",
          definition: "Hicr",
        },
        {
          id: "16",
          code: "16",
          definition: "Nahl",
        },
        {
          id: "17",
          code: "17",
          definition: "İsra",
        },
        {
          id: "18",
          code: "18",
          definition: "Kehf",
        },
        {
          id: "19",
          code: "19",
          definition: "Meryem",
        },
        {
          id: "20",
          code: "20",
          definition: "Taha",
        },
        {
          id: "21",
          code: "21",
          definition: "Enbiya",
        },
        {
          id: "22",
          code: "22",
          definition: "Hac",
        },
        {
          id: "23",
          code: "23",
          definition: "Muminun",
        },
      ],
    },
    {
      id: "2",
      code: "Hadisler",
      definition: "Hadisler",
    },
    {
      id: "3",
      code: "3",
      definition: "Hicri Takvim",
    },
    {
      id: "4",
      code: "4",
      definition: "Namaz Vakitleri",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="flex">
      <ul className="flex w-full h-11 z-20">
        {categories.map((category) => (
          <li
            key={category.id}
            className="group w-full text-center
                border-r border-brand-gray
            hover:bg-zinc-600 hover:text-white rounded-md px-4 py-2 cursor-pointer transition-all ease-in-out duration-300 group-hover:bg-brand-primary group-hover:text-white"
          >
            {category.definition}
            <div className="h-80 w-80 overflow-y-scroll hidden group-hover:flex flex-col">
              {category?.subCategories?.map((subCategory) => (
                <Link
                  key={subCategory.id}
                  className="py-4 group-hover:flex w-full
                 items-start justify-center
               bg-brand-white hidden text-brand-black
               hover:bg-brand-primary hover:text-white
            "
                  href={`/sureler/${subCategory.id}`}
                >
                  {subCategory.definition}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
