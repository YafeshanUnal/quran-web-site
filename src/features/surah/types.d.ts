interface HafisListModel {
  name: string;
  subFolder: string;
  bitrate: string;
}
interface SurahDetail {
  number: number;
  ayahs: Ayah[];
  surahs: Surah;
  edition: Edition;
}

interface Ayah {
  number: number;
  text: string;
  surah: Surah;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
}

interface Edition {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  format: string;
  type: string;
  direction: string;
}
