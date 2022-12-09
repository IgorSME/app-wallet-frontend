import months from 'assets/data/months.json';

export const getMonthPosition = month => {
  const result = months.indexOf(month);

  if (result === -1) return undefined;

  return result;
};
