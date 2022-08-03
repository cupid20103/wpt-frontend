export const getScreenWidth = (width: number) => {
  if (window.innerWidth > width) {
    return false;
  } else {
    return true;
  }
};
