export const transformNumber = number => {
  return (Math.trunc(number * 100) / 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d+))/g, ' ');
};
