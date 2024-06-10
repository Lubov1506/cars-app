import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});
