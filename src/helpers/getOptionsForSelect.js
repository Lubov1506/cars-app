export const getOptionsForSelect = (options) => {
  return options.map((item) => {
    return { value: item, label: item };
  });
};
