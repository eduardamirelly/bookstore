import { configureStore } from "@reduxjs/toolkit";

import reducers from './features';

const store = configureStore({
  reducer: reducers,
})

export default store;
