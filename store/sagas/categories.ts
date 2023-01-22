import { call, put, takeLatest } from 'redux-saga/effects';
import { loadCategoriesRequest, loadCategoriesFailure, loadCategoriesSuccess } from '../features/categories';
import api from '../../services/api';
import Category from '../@types/categories';

const getCategories = () => api.get<Category[]>('/categories');

function* fetchCategories() {
  console.log(process.env.API_URL)
  try {
    const categories: Category[] = yield call(getCategories);
    console.log(categories);
    yield put({ type: loadCategoriesSuccess.type, categories });
  } catch {
    yield put({ type: loadCategoriesFailure.type });
  }
}

export default takeLatest(loadCategoriesRequest.type, fetchCategories)

