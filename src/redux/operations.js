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
      dispatch(setAdverts(response.payload));

      const hasMore = response.payload.length > 0;
      dispatch(setHasMore(hasMore));
    } catch (error) {
      console.error('Error fetching adverts:', error);
    }
  };

// export const fetchAdvertsAsync = () => async (dispatch, getState) => {
//   const filters = getFilters(getState());
//   try {
//     const response = await dispatch(fetchAdverts(filters));
//     dispatch(setAdverts(response.payload));
//   } catch (error) {
//     console.error('Error fetching adverts:', error);
//   }
// };

// const getFilters = (state) => {
//   const page = state.adverts.page;
//   const makeFilter = state.adverts.makeFilter
//     ? `make=${state.adverts.makeFilter}`
//     : '';
//   const priceFilter = state.adverts.priceFilter
//     ? `price=${state.adverts.priceFilter}`
//     : '';
//   const mileageFilter = state.adverts.mileageFilter
//     ? `mileage=${state.adverts.mileageFilter}`
//     : '';

//   const filters = [makeFilter, priceFilter, mileageFilter]
//     .filter(Boolean)
//     .join('&');

//   return filters ? `${filters}&page=${page}&limit=12` : `page=${page}&limit=12`;
// };
