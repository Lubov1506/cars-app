export const prettyBalanceFormat = (number) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(number)
    .replace(/,/g, ",");
};
