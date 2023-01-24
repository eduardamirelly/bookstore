import { AxiosResponse } from 'axios';

import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../services/api';
import Category from '../@types/categories';

import { loadCategoriesFailure, loadCategoriesRequest, loadCategoriesSuccess } from '../features/categories';


function* fetchCategories() {
  try {
    const getCategories = () => api.get<Category[]>('/categories');
    const response: AxiosResponse<Category[]> = yield call(getCategories);
    yield put({ type: loadCategoriesSuccess.type, payload: response.data });
  } catch {
    yield put({ type: loadCategoriesFailure.type });
  }
}

export default takeLatest(loadCategoriesRequest.type, fetchCategories)

