import { AxiosResponse } from 'axios';

import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../services/api';
import { Book } from '../@types/books';
import { loadBooksFailure, loadBooksRequest, loadBooksSuccess } from '../features/books';


function* fetchBooksRequest() {
  try {
    const getBooks = () => api.get<Book[]>('/books');
    const response: AxiosResponse<Book[]> = yield call(getBooks);
    yield put({ type: loadBooksSuccess.type, payload: response.data });
  } catch {
    yield put({ type: loadBooksFailure.type });
  }
}

export default takeLatest(loadBooksRequest.type, fetchBooksRequest)

