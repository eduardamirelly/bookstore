import { createSlice } from '@reduxjs/toolkit';
import Category from '../@types/categories';

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [] as Category[],
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
