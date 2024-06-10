import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://664396276c6a65658707ade7.mockapi.io/";

export const fetchCarsThunk = createAsyncThunk(
  "cars/FetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("adverts");
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
