import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import reducers from './features';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export default store;
