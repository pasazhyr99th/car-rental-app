import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65bd2426b51f9b29e932fc0e.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios(`/cars?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
