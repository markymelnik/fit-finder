import { configureStore } from '@reduxjs/toolkit';
import mobileReducer from './mobileSlice';
import searchTermReducer from './searchTermSlice';
import facilitiesSliceReducer from './facilitySlice';
import amenititesSliceReducer from './amenitySlice';
import selectedFacilityReducer from './selectedFacilitySlice';
import filtersReducer from './filterSlice';

const store = configureStore({
  reducer: {
    isMobile: mobileReducer,
    searchTerm: searchTermReducer,
    facilities: facilitiesSliceReducer,
    amenities: amenititesSliceReducer,
    selectedFacility: selectedFacilityReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
