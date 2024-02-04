import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAdverts, setHasMore } from './advertsSlice';

axios.defaults.baseURL = 'https://65bd2426b51f9b29e932fc0e.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async ({ page, makeFilter }, thunkAPI) => {
    try {
      const { data } = await axios(
        `/adverts?page=${page}&limit=12${
          makeFilter ? `&make=${makeFilter}` : ''
        }`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAdvertsAsync =
  ({ makeFilter } = {}) =>
  async (dispatch, getState) => {
    const page = getState().adverts.page;
    try {
      const response = await dispatch(fetchAdverts({ page, makeFilter }));
      const currentAdverts = getState().adverts.list;
      const newAdverts = response.payload;

      if (newAdverts.length > 0) {
        const uniqueNewAdverts = newAdverts.filter(
          (newAdvert) =>
            !currentAdverts.some(
              (currentAdvert) => currentAdvert.id === newAdvert.id
            )
        );

        dispatch(setAdverts([...currentAdverts, ...uniqueNewAdverts]));
        dispatch(setHasMore(true));
      } else {
        dispatch(setHasMore(false));
      }
    } catch (error) {
      console.error('Error fetching adverts:', error);
    }
  };
