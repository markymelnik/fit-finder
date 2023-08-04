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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
