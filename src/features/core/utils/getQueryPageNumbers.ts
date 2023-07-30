export const getQueryPageNumbers = (number: number) => {
  if (number >= 1 && number < 10) {
    return `00${number}`;
  } else if (number >= 10 && number < 100) {
    return `0${number}`;
  } else if (number === 0) {
    return `001`;
  } else {
    return `${number}`;
  }
};
