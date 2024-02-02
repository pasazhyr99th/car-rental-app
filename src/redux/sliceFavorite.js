import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: {
    addFavorite: (state, action) => {},
    removeFavorite: () => {},
  },
});
