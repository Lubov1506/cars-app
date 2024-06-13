import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://664396276c6a65658707ade7.mockapi.io/";

export const fetchAllCarsThunk = createAsyncThunk(
  "cars/FetchAll",
  async (params, thunkApi) => {
    const { query } = params;
    try {
      const url = new URL(
        "https://664396276c6a65658707ade7.mockapi.io/adverts"
      );
      Object.entries(query).length > 0 &&
        Object.entries(query).forEach(([key, value]) => {
          url.searchParams.append(key, value);
        });
      const { data } = await axios.get(url.toString());

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchSearchCarsThunk = createAsyncThunk(
  "cars/FetchSearchCars",
  async (params, thunkApi) => {
    const { query, limit = 12, page = 1 } = params;
    try {
      const url = new URL(
        "https://664396276c6a65658707ade7.mockapi.io/adverts"
      );

      url.searchParams.append("limit", limit);
      url.searchParams.append("page", page);

      Object.entries(query).length > 0 &&
        Object.entries(query).forEach(([key, value]) => {
          url.searchParams.append(key, value);
        });
      const { data } = await axios.get(url.toString());
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
