export const formatRentalConditions = (rentalConditions) => {
  return rentalConditions.split("\n").map((item) => {
    const newItem = item.split(":");
    return newItem.length === 1
      ? newItem[0]
      : { key: newItem[0], value: newItem[1] };
  });
};
