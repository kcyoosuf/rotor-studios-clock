/* Keeps the value in two digits by prepending '0' */
export const addZero = (value: number) => {
  return ("0" + value).slice(-2);
};
