import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from './searchTermSlice';

const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
  },
});

export default store;