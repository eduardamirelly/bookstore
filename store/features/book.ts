import { createSlice } from '@reduxjs/toolkit';

export const BookSlice = createSlice({
  name: 'book',
  initialState: {
    name: '',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload.name;
    }
  }
})

export const {
  setName,
} = BookSlice.actions;

export default BookSlice.reducer;
