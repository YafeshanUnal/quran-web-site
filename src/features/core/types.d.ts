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

interface IconProps {
  className?: string;
  width?: string;
  height?: string;
}
