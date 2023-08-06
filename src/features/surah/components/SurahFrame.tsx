import { getArabicNumbers } from "src/features/core/utils/getArabicNumbers";
import Image from "next/image";
import { useState } from "react";
interface SurahFrameProps {
  surah: Surah;
}

export const SurahFrame = ({ surah }: SurahFrameProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ayetsPerPage = 5;

  // Dizideki toplam ayet sayısını alıyoruz
  // const totalAyets = surah?.verses.length || 0;

  // // Sayfadaki ilk ve son ayetlerin indexlerini hesaplıyoruz
  // const indexOfLastAyet = currentPage * ayetsPerPage;
  // const indexOfFirstAyet = indexOfLastAyet - ayetsPerPage;

  // // Mevcut sayfadaki ayetleri alıyoruz
  // const currentAyets = surah?.verses.slice(indexOfFirstAyet, indexOfLastAyet) || [];

  // // Sayfa numaralarını hesaplamak için sayfa sayısını buluyoruz
  // const totalPages = Math.ceil(totalAyets / ayetsPerPage);

  // // Sayfa numaralarını oluşturuyoruz
  // const pageNumbers = [];
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex flex-row-reverse gap-1 flex-wrap">
      {surah?.verses?.map((verse: Verse, index: number) => (
        <div key={verse.id} className="flex items-center group relative w-auto">
          <span
            className="text-black relative rounded-full items-start
                   font-amiri"
          >
            <Image src="/verseFrame.png" width={48} height={48} alt={""} />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
              {getArabicNumbers((index + 1).toString())}
            </span>
          </span>
          <div
            className="flex  p-4 font-amiri text-3xl leading-relaxed border border-yellow-200 rounded-lg flex-1 "
            dir="rtl"
          >
            <span> {verse.verse}</span>
          </div>
          <div className="hidden group-hover:flex absolute right-0 top-0 p-2 bg-white rounded-lg h-full w-full items-center z-10 cursor-pointer">
            <span className="text-2xl font-amiri text-right">
              {verse.translation.text}
            </span>
          </div>
        </div>
      ))}
      {/* <div className="flex gap-2 mt-4">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 border rounded-lg ${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div> */}
    </div>
  );
};
