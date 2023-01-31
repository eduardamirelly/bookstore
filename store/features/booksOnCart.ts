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
      const bookAlreadyExists = state.data.filter((item) => item.id === book.id);

      if(bookAlreadyExists.length < 1) {
        state.data = [...state.data, book];
      }
    },
  }
})

export const {
  addBookOnCart,
} = BooksOnCartSlice.actions;

export default BooksOnCartSlice.reducer;
