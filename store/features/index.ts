import { combineReducers } from '@reduxjs/toolkit';
import books from './books';
import booksOnCart from './booksOnCart';
import categories from './categories';

export default combineReducers({
  books,
  categories,
  booksOnCart,
});
