import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, fetchCarsPagThunk } from "./operations";

const initialState = {
  cars: [],
  favorites: [],
  favoritesId: [],
  isLoading: false,
  isError: false,
  totalPage: null,
  limit: 12,
  currentPage: 1,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const car = action.payload;
      const isFavorite = state.favoritesId.includes(car.id);
      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (favCar) => favCar.id !== car.id
        );
        state.favoritesId = state.favoritesId.filter((id) => id !== car.id);
      } else {
        state.favorites.push(car);
        state.favoritesId.push(car.id);
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
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
export const { toggleFavorite, setCurrentPage } = slice.actions;
export const carsReducer = slice.reducer;
