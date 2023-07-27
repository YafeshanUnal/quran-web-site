import { useRouter } from "next/router";
import { useGetSurahQuery } from "src/features/core/store/coreService";
import Image from "next/image";
export const SurahPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: surah, isLoading, isSuccess } = useGetSurahQuery(id as string);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const arabicNumerals = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠"];

  return (
    <main className="h-screen">
      <div className="text-xl text-red-600 max-h-[70vh] flex flex-col gap-2 px-3 mt-2 overflow-y-auto">
        <header className="flex flex-col items-center top-0  z-10">
          <div className="flex relative w-full max-w-lg h-80">
            <Image
              className="rounded-lg object-cover"
              src="/surahFrame.jpg"
              fill
              alt={""}
            />
            <div className="absolute top-0   w-full left-0 flex justify-between items-center text-brand-white flex-col gap-2 h-full p-4">
              <span className="font-poppins text-3xl">{surah?.data?.name}</span>
              <span className="font-poppins text-2xl">
                Ayet Sayısı: {surah?.data?.verse_count}
              </span>
              {/* write to 2 px white line */}
              <span className="h-[0.5px] bg-brand-white w-full"></span>
              <div className="flex items-center gap-4">
                <span>Sesli Türkçe Meal </span>
                <audio controls src={surah?.data?.audio.mp3}></audio>
              </div>
              <Image src="/bismillah.png" width={214} height={48} alt={""} />
            </div>
          </div>
        </header>
        <div className="flex flex-row-reverse gap-1 flex-wrap flex-1">
          {surah?.data?.verses.map((verse: Verse, index: number) => (
            <div key={verse.id} className="flex items-center">
              <span
                className="text-black rounded-full flex border border-dashed border-red-500
                     font-amiri justify-center bg-yellow-400 h-10 w-10"
              >
                {arabicNumerals[index]}
              </span>
              <span
                className="flex p-4 font-amiri text-3xl 
                  leading-relaxed


                border border-yellow-200 rounded-lg flex-1 "
                dir="rtl"
              >
                {verse.verse}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
