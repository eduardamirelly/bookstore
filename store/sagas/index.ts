import { all } from 'redux-saga/effects';
import books from './books';
import categories from './categories';

export default function* rootSaga() {
  yield all([categories, books]);
}
