export const getTokenAmount = (x: number): number => {
  return Number((x / 10 ** 18).toFixed(2));
};
