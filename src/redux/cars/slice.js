import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, fetchSearchCarsThunk } from "./operations";

const initialState = {
  cars: [],
  favorites: [],
  favoritesId: [],
  query: {},
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
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    resetCars: (state) => {
      state.cars = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.totalPage = Math.ceil(payload.length / state.limit);
      })
      .addCase(fetchSearchCarsThunk.fulfilled, (state, { payload }) => {
        if (state.currentPage === 1) {
          state.cars = payload;
        } else {
          state.cars = [...state.cars, ...payload];
        }
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(fetchAllCarsThunk.pending), (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchAllCarsThunk.rejected), (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchAllCarsThunk.fulfilled), (state) => {
        state.isLoading = false;
      });
  },
});
export const { toggleFavorite, setCurrentPage, setQuery, resetCars } =
  slice.actions;
export const carsReducer = slice.reducer;
