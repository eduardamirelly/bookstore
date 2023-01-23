import { combineReducers } from '@reduxjs/toolkit';
import books from './books';
import categories from './categories';

export default combineReducers({
  books,
  categories,
});
