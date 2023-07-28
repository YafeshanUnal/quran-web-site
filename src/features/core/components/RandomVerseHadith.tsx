import { useEffect, useState } from "react";
import { useGetRandomAyahQuery, useGetRandomHadithQuery } from "../store/coreService";
import { getTranslate } from "../utils/getTranslate";
import { RandomIcon } from "../icons/RandomIcon";

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
    <main className="grid grid-cols-2 justify-between gap-10 text-brand-black w-full h-fit my-10">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold text-center">Bir Ayet</span>
        <div className="flex flex-col items-center text-center text-xl justify-center gap-4">
          <p className="font-amiri text-3xl">{ayet?.data?.verse}</p>
          <p className="">{ayet?.data?.translation.text}</p>
          <div className="flex gap-2 tablet:flex-col">
            <span>Sure: {ayet?.data?.surah.name}</span>
            <span>Ayet: {ayet?.data?.verse_number}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col">
        <span className="text-2xl font-bold text-center">Bir Hadis</span>
        {hadith && (
          <div className="flex flex-col text-xl text-center items-center justify-center gap-4">
            <p className="">{translatedText}</p>
            <div className="flex gap-2 tablet:flex-col">
              <span>Kitap Adı: {hadith.collection}</span>
              <span>Kitap Numarası: {hadith.bookNumber}</span>
              <span>Hadis Numarsı: {hadith.hadithNumber}</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
