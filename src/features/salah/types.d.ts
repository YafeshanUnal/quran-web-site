interface SalahTimesRequest {
  date: string;
  city: string;
  country: string;
  method: string;
}

interface Timings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
}

interface GregorianDate {
  date: string;
  format: string;
  day: string;
  weekday: {
    en: string;
  };
  month: {
    number: number;
    en: string;
  };
  year: string;
  designation: {
    abbreviated: string;
    expanded: string;
  };
}

interface HijriDate {
  date: string;
  format: string;
  day: string;
  weekday: {
    en: string;
    ar: string;
  };
  month: {
    number: number;
    en: string;
    ar: string;
  };
  year: string;
  designation: {
    abbreviated: string;
    expanded: string;
  };
  holidays: string[];
}

interface Meta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: {
    id: number;
    name: string;
    params: {
      Fajr: number;
      Isha: number;
    };
  };
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: {
    Imsak: number;
    Fajr: number;
    Sunrise: number;
    Dhuhr: number;
    Asr: number;
    Maghrib: number;
    Sunset: number;
    Isha: number;
    Midnight: number;
  };
}

interface SalahTime {
  code: number;
  status: string;
  timings: Timings;
  date: {
    readable: string;
    timestamp: string;
    gregorian: GregorianDate;
    hijri: HijriDate;
  };
  meta: Meta;
}
