import { useGetSurahQuery } from "src/features/core/store/quranService";

export const SurahPage = () => {
  const { data: surah, isLoading, isSuccess } = useGetSurahQuery("114");
  console.log("surah", surah);
  console.log("id", surah?.data.id);
  console.log("audio", surah?.data.audio.mp3);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const arabicNumerals = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠"];

  return (
    <div>
      <div className="text-xl text-red-600 h-96 flex flex-col gap-2 px-3 mt-2 overflow-y-auto">
        <h3>{surah.data?.name}</h3>
        <div className="flex items-center">
          <span>Sesli Türkçe Meal </span>
          <audio controls src={surah.data?.audio.mp3}></audio>
        </div>
        <div className="flex flex-row-reverse gap-1 dbg flex-wrap flex-1">
          {surah.data?.verses.map((verse: Verse, index: number) => (
            <div key={verse.id} className="flex items-center">
              <span
                className="text-black rounded-full flex border border-dashed border-red-500
                     font-amiri justify-center bg-yellow-400 h-10 w-10"
              >
                {arabicNumerals[index]}
              </span>
              <span
                className="flex p-1 font-amiri text-3xl border border-yellow-200 rounded-lg flex-1 "
                dir="rtl"
              >
                {verse.verse}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
