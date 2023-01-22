import { call, put, takeLatest } from 'redux-saga/effects';
import { loadCategoriesRequest, loadCategoriesFailure } from '../features/categories';
import api from '../../services/api';
import Category from '../@types/categories';

const getCategories = () => api.get<Category[]>('/categories');

function* fetchCategories() {
  try {
    const categories: Category[] = yield call(getCategories);
    console.log(categories);
    yield put({ type: loadCategoriesRequest, categories });
  } catch {
    yield put({ type: loadCategoriesFailure });
  }
}

export default [
  takeLatest(loadCategoriesRequest.type, fetchCategories)
]
