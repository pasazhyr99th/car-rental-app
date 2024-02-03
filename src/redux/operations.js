import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAdverts } from './advertsSlice';

axios.defaults.baseURL = 'https://65bd2426b51f9b29e932fc0e.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios(`/adverts?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAdvertsAsync = () => async (dispatch, getState) => {
  const page = getState().adverts.page;
  try {
    const response = await dispatch(fetchAdverts(page));
    dispatch(setAdverts(response.payload));
  } catch (error) {
    console.error('Error fetching adverts:', error);
  }
};
