export const getArabicNumbers = (text: string) => {
  return text.replace(/[0-9]/g, (w: string) => {
    return String.fromCharCode(w.charCodeAt(0) + 1584);
  });
};
