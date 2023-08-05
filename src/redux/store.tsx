import { configureStore } from '@reduxjs/toolkit';
import mobileReducer from './mobileSlice';
import searchTermReducer from './searchTermSlice';
import locationsSlice from './locationsSlice';

const store = configureStore({
  reducer: {
    isMobile: mobileReducer,
    searchTerm: searchTermReducer,
    locations: locationsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
