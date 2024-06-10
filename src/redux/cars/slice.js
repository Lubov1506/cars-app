import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations";

const initialState = {
  cars: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addMatcher(isAnyOf(fetchCarsThunk.pending), (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchCarsThunk.rejected), (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchCarsThunk.fulfilled), (state) => {
        state.isLoading = false;
      });
  },
});
export const carsReducer = slice.reducer;
