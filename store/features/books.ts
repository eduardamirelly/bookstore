import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../@types/books';

export const BookSlice = createSlice({
  name: 'books',
  initialState: {
    data: [] as Book[],
    loading: false,
  },
  reducers: {
    loadBooksRequest(state) {
      state.loading = true;
    },
    loadBooksSuccess(state, action) {
      const { books } = action.payload;
      state.data = books;
      state.loading = false;
    },
    loadBooksFailure(state) {
      state.loading = false;
    },
  }
})

export const {
  loadBooksRequest,
  loadBooksSuccess,
  loadBooksFailure,
} = BookSlice.actions;

export default BookSlice.reducer;
