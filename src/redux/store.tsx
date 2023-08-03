import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './searchTermSlice';
import mobileReducer from './mobileSlice';

const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    isMobile: mobileReducer,
  },
});

export default store;
