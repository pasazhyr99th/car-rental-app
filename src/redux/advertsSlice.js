// import { createSlice } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   favorites: [],
// };

// export const favoriteSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addFavorite: (state, action) => {
//       state.favorites.push(action.payload);
//     },
//     removeFavorite: (state, action) => {
//       const updFavorites = state.favorites.filter(
//         (item) => item.id !== action.payload.id
//       );
//       state.favorites = updFavorites;
//     },
//   },
//   extraReducers: builder => builder.addCase(),
// });

// export const { addFavorite, removeFavorite } = favoriteSlice.actions;
// export default favoriteSlice.reducer;

const initialState = {
  list: [],
  page: 1,
  favorites: [],
  makeFilter: '',
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
        }
        state.favorites.push(advert);
        advert.isFavorite = true;
      }
    },
    filterMake: (state, action) => {
      state.makeFilter = action.payload;
    },
  },
});

export const { setAdverts, loadMore, toggleFavorite, filterMake } =
  advertsSlice.actions;
export default advertsSlice.reducer;