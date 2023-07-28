import Image from "next/image";
import { useGetHafizListQuery } from "../store/surahService";
import { Select } from "@mui/material";
import ReactPlayer from "react-player";

interface SurahHeaderFrameProps {
  surah: Surah;
}
export const SurahHeaderFrame = ({ surah }: SurahHeaderFrameProps) => {
  const { data } = useGetHafizListQuery();

  return (
    <header className="flex flex-col items-center top-0  z-10">
      <div className="flex relative w-full max-w-lg h-[400px]">
        <Image className="rounded-lg object-cover" src="/surahFrame.jpg" fill alt={""} />
        <div className="absolute top-0 w-full left-0 flex justify-between items-center text-brand-white flex-col gap-2 h-full p-4">
          <span className="text-3xl">{surah?.name}</span>
          <span className="text-2xl">Ayet Sayısı: {surah?.verse_count}</span>
          <span className="h-[0.5px] bg-brand-white w-full"></span>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="">Arapça Dinle</span>
              {/* <Select
                className="w-40"
                native
                defaultValue="1"
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
              >
                {data?.map((hafiz, index) => (
                  <option key={index} value={index}>
                    {hafiz.name}
                  </option>
                ))}
              </Select> */}
              <audio
                controls
                src={`https://everyayah.com/data/Abdul_Basit_Murattal_64kbps/PageMp3s/Page${surah?.pageNumber}.mp3`}
                // güzel stillendir border shadow
              ></audio>
            </div>
            <div className="flex items-center gap-3">
              <span>Türkçe Meal </span>
              <audio controls src={surah?.audio.mp3}></audio>
            </div>
          </div>
          <Image src="/bismillah.png" width={214} height={48} alt={""} />
        </div>
      </div>
    </header>
  );
};
