interface SurahFrameProps {
  surah: Surah;
}

export const SurahFrame = ({ surah }: SurahFrameProps) => {
  const arabicNumerals = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠"];

  return (
    <div className="flex flex-row-reverse gap-1 flex-wrap flex-1">
      {surah?.verses.map((verse: Verse, index: number) => (
        <div key={verse.id} className="flex items-center">
          <span
            className="text-black rounded-full flex border border-dashed border-red-500
                   font-amiri justify-center bg-yellow-400 h-10 w-10"
          >
            {arabicNumerals[index]}
          </span>
          <span
            className="flex p-4 font-amiri text-3xl leading-relaxed border border-yellow-200 rounded-lg flex-1 "
            dir="rtl"
          >
            {verse.verse}
          </span>
        </div>
      ))}
    </div>
  );
};
