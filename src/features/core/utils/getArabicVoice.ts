import { getQueryPageNumbers } from "./getQueryPageNumbers";

export const getArabicVoice = (page: number) => {
  return `https://everyayah.com/data/Maher_AlMuaiqly_64kbps/PageMp3s/Page${getQueryPageNumbers(
    page,
  )}.mp3`;
};
