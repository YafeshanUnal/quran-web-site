import { useGetRandomAyahQuery, useGetRandomHadithQuery } from "../store/coreService";

export const RandomVerseHadith = () => {
  const { data: hadith, isLoading } = useGetRandomHadithQuery();
  console.log("hadith", hadith);

  const parseHTML = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="grid grid-cols-2 items-center justify-center gap-10 w-full h-fit my-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-center text-brand-black">Bir Ayet</h2>
        {hadith && (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-xl text-center text-brand-black">
              {parseHTML(hadith.hadith[0].body)}
            </p>
            <div className="flex gap-2">
              <span>Kitap Adı: {hadith.collection}</span>
              <span>Kitap Numarası: {hadith.bookNumber}</span>
              <span>Hadis Numarsı: {hadith.hadithNumber}</span>
            </div>
          </div>
        )}
      </div>
      <div className="">
        <h2 className="text-2xl font-bold text-center text-brand-black">Bir Hadis</h2>
        {hadith && (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-xl text-center text-brand-black">
              {parseHTML(hadith.hadith[0].body)}
            </p>
            <div className="flex gap-2">
              <span>Kitap Adı: {hadith.collection}</span>
              <span>Kitap Numarası: {hadith.bookNumber}</span>
              <span>Hadis Numarsı: {hadith.hadithNumber}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
