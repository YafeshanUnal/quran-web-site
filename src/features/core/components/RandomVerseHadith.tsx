import { useEffect, useState } from "react";
import { useGetRandomAyahQuery, useGetRandomHadithQuery } from "../store/coreService";
import { getTranslate } from "../utils/getTranslate";

const getAyahRequest: GetRandomAyahRequest = {
  surah: Math.floor(Math.random() * 114) + 1,
  verse: Math.floor(Math.random() * 7) + 1,
};

export const RandomVerseHadith = () => {
  const { data: hadith, isLoading } = useGetRandomHadithQuery();
  const { data: ayet } = useGetRandomAyahQuery(getAyahRequest);
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const translationResult = await getTranslate(
          parseHTML(hadith.hadith[0].body), // Bu kısmı uygun şekilde değiştirin
          "en",
          "tr",
        );
        setTranslatedText(translationResult);
      } catch (error) {
        console.error("Çeviri işlemi başarısız oldu:", error);
      }
    };

    fetchTranslation();
  }, [hadith?.hadith]);

  const parseHTML = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="grid grid-cols-2 dbg justify-between gap-10 w-full h-fit my-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-center text-brand-black">Bir Ayet</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-xl text-center text-brand-black">{ayet?.data?.verse}</p>
          <p className="text-xl text-center text-brand-black">
            {ayet?.data?.translation.text}
          </p>
          <div className="flex gap-2">
            <span>Sure: {ayet?.data?.surah.name}</span>
            <span>Ayet: {ayet?.data?.verse_number}</span>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold text-center text-brand-black">Bir Hadis</h2>
        {hadith && (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-xl text-center text-brand-black">{translatedText}</p>
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
