import { call, put, takeLatest } from 'redux-saga/effects';
import { loadCategoriesRequest, loadCategoriesFailure, loadCategoriesSuccess } from '../features/categories';
import api from '../../services/api';
import Category from '../@types/categories';
import { AxiosResponse } from 'axios';

const getCategories = () => api.get<Category[]>('/categories');

function* fetchCategories() {
  try {
    const response: AxiosResponse<Category[]> = yield call(getCategories);
    yield put({ type: loadCategoriesSuccess.type, payload: response.data });
  } catch {
    yield put({ type: loadCategoriesFailure.type });
  }
}

export default takeLatest(loadCategoriesRequest.type, fetchCategories)

