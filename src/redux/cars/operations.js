import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://664396276c6a65658707ade7.mockapi.io/";

export const fetchAllCarsThunk = createAsyncThunk(
  "cars/FetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("adverts");
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
export const fetchCarsPagThunk = createAsyncThunk(
  "cars/FetchCarsPag",
  async ({ page }, thunkApi) => {
    try {
      const { data } = await axios.get("adverts", {
        params: {
          limit: 12,
          page,
        },
      });
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
