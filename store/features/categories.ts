import { createSlice } from '@reduxjs/toolkit';

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    loadCategoriesRequest(state) {
      state.loading = true;
    },
    loadCategoriesSuccess(state, action) {
      const categories = action.payload;
      state.data = categories;
      state.loading = false;
    },
    loadCategoriesFailure(state) {
      state.loading = false;
    },
  }
})

export const {
  loadCategoriesRequest,
  loadCategoriesSuccess,
  loadCategoriesFailure,
} = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
