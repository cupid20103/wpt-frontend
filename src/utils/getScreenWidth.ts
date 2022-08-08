export const getScreenWidth = (width: number): boolean => {
  if (window.innerWidth > width) {
    return false;
  } else {
    return true;
  }
};
