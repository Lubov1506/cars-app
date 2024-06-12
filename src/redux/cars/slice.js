import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, fetchCarsPagThunk } from "./operations";

const initialState = {
  cars: [],
  isLoading: false,
  isError: false,
  totalPage: null,
  limit: 12,
};

const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.totalPage = Math.ceil(payload.length / state.limit);
      })
      .addCase(fetchCarsPagThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.cars = [...state.cars, ...payload];
      })

      .addMatcher(
        isAnyOf(fetchCarsPagThunk.pending, fetchAllCarsThunk.pending),
        (state) => {
          state.error = false;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchCarsPagThunk.rejected, fetchAllCarsThunk.rejected),
        (state) => {
          state.error = true;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchCarsPagThunk.fulfilled, fetchAllCarsThunk.fulfilled),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});
export const carsReducer = slice.reducer;
