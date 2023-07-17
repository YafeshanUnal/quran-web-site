import axios from "axios";

export const getTranslate = async (
  sourceText: string,
  sourceLang: string,
  targetLang: string,
) => {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(
      sourceText,
    )}`;
    const response = await axios.get(url);
    console.log("response", response);
    const translatedText = response.data[0][0][0];
    console.log("Çeviri başarılı:", translatedText);
    return translatedText;
  } catch (error) {
    console.error("Çeviri işlemi başarısız oldu:", error);
    return null;
  }
};
