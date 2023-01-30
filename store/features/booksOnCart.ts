import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../@types/books';

export const BooksOnCartSlice = createSlice({
  name: 'booksOnCart',
  initialState: {
    data: [] as Book[],
  },
  reducers: {
    addBookOnCart(state, action) {
      const book = action.payload;
      state.data = [...state.data,...book];
    },
  }
})

export const {
  addBookOnCart,
} = BooksOnCartSlice.actions;

export default BooksOnCartSlice.reducer;
