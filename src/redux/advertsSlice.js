import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  page: 1,
  favorites: [],
  makeFilter: '',
  priceFilter: '',
  mileageFilter: '',
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setAdverts: (state, action) => {
      state.list = action.payload;
    },
    loadMore: (state) => {
      state.page += 1;
    },
    toggleFavorite: (state, action) => {
      const advertId = action.payload;
      const advert = state.list.find((ad) => ad.id === advertId);

      if (advert) {
        if (state.favorites.some((fav) => fav.id === advertId)) {
          state.favorites = state.favorites.filter(
            (fav) => fav.id !== advertId
          );
          advert.isFavorite = false;
        } else {
          state.favorites.push(advert);
          advert.isFavorite = true;
        }
      }
    },
    filterMake: (state, action) => {
      state.makeFilter = action.payload;
      state.page = 1;
    },
    filterPrice: (state, action) => {
      state.priceFilter = action.payload;
      state.page = 1;
    },
    filterMileage: (state, action) => {
      state.mileageFilter = action.payload;
      state.page = 1;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
});

export const {
  setAdverts,
  loadMore,
  toggleFavorite,
  filterMake,
  filterPrice,
  filterMileage,
  setHasMore,
} = advertsSlice.actions;

export default advertsSlice.reducer;
