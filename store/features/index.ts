import { combineReducers } from '@reduxjs/toolkit';
import book from './book';
import categories from './categories';

export default combineReducers({
  book,
  categories,
});
