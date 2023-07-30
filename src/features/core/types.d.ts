type ApiResponse<T> = ApiResposeSuccess<T> | ApiResposeError;

interface ApiResponse<T> {
  data: T;
}

interface ApiResposeError {
  value: null;
  succeeded: false;
  info: {
    message: string;
    responseType: number;
  };
}

interface IconProps {
  className?: string;
  width?: string;
  height?: string;
}

interface Surah {
  id: number;
  name: string;
  slug: string;
  verse_count: number;
  pageNumber: number;
  audio: {
    mp3: string;
    duration: number;
  };
  zero: null;
  verses: Verse[];
}

interface Verse {
  id: number;
  surah_id: number;
  verse_number: number;
  verse: string;
  page: number;
  juzNumber: number;
  transcription: string;
  translation: {
    id: number;
    author: {
      id: number;
      name: string;
      description: string;
      language: string;
    };
    text: string;
    footnotes: null;
  };
}

interface Hadith {
  collection: string;
  bookNumber: string;
  chapterId: string;
  hadithNumber: string;
  hadith: HadithItem[];
}

interface HadithItem {
  lang: string;
  chapterNumber: string;
  chapterTitle: string;
  urn: number;
  body: string;
  grades: any[]; // Eğer "grades" özelliğinin belirli bir yapıya sahip olduğunu biliyorsanız, bu özelliği uygun bir tipe dönüştürebilirsiniz.
}

interface Ayah {
  id: number;
  surah_id: number;
  verse_number: number;
  char_count: number;
  word_count: number;
  total_abjad: number;
  words_abjad: string;
  word_chars_abjad: string;
  verse: string;
  verse_without_vowel: string;
  transcription: string;
  translation: {
    id: number;
    author: {
      id: number;
      name: string;
      description: string;
      language: string;
    };
    text: string;
    footnotes: {
      id: number;
      number: number;
      text: string;
    }[];
  };
}

interface GetRandomAyahRequest {
  surah: number;
  verse: number;
}

// Verse model
interface Page {
  id: number;
  chapter_id?: number;
  verse_number: number;
  verse_key: string;
  verse_index?: number;
  text_uthmani?: string;
  text_uthmani_simple?: string;
  text_imlaei?: string;
  text_imlaei_simple?: string;
  text_indopak?: string;
  text_uthmani_tajweed?: string;
  juz_number: number;
  hizb_number: number;
  rub_number: number;
  sajdah_type: null;
  sajdah_number: null;
  page_number: number;
  image_url?: string;
  image_width?: number;
  words?: Word[];
  audio?: AudioFile;
  translations?: Translation[];
  code_v1?: string;
  code_v2?: string;
  v1_page?: number;
  v2_page?: number;
}

// Word model
interface Word {
  // Word model properties
  // ...
}

// AudioFile model
interface AudioFile {
  // AudioFile model properties
  // ...
}

// Translation model
interface Translation {
  // Translation model properties
  // ...
}
