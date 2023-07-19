import { HomePageCarousel } from "../components/HomePageCarousel";
import { RandomVerseHadith } from "../components/RandomVerseHadith";
import { useGetSurahQuery } from "../store/coreService";

export const HomePage = () => {
  return (
    <div className="w-full">
      <HomePageCarousel />
      <main>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-brand-black">
            Welcome to Quran App
          </h1>
          <p className="text-xl text-center text-brand-black">
            Quran App is a web application that allows you to read the Quran with Turkish
            translation and listen to the Quran in Arabic.
          </p>
        </div>
        {/* Bir ayet, bir hadis */}
        <section className="flex items-center justify-center gap-11 w-full">
          <RandomVerseHadith />
        </section>
      </main>
    </div>
  );
};
