export const brandSelectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "grey" : " rgba(74, 86, 226, 0.10)",
    backgroundColor: "transparent",
    color: "black",
    borderCollapse: "separate",
    width: "224px",
    height: "48px",
    alignItems: "center",
    padding: "0",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "black",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    border: " 1px solid rgba(18, 20, 23, 0.05)",
    borderCollapse: "separate",
    borderRadius: "14px",
    scrollBehavior: "smooth",
    scrollbarWidth: "2px",
    scrollbarColor: "rgba(18, 20, 23, 0.05) #fff ",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? "#ffffff1a" : "transparent",
    color: state.isDisabled
      ? " rgba(255, 255, 255, 0.6)"
      : state.isSelected
      ? "black"
      : "rgba(18, 20, 23, 0.2);",
    cursor: state.isDisabled ? "not-allowed" : "pointer",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "black",
    fontWeight: 600,
  }),

  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: "0 18px",
  }),

  cursor: "pointer",
};
