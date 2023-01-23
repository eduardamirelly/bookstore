import { createSlice } from '@reduxjs/toolkit';

export const BookSlice = createSlice({
  name: 'books',
  initialState: {
    data: [],
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
