import { configureStore } from '@reduxjs/toolkit';
import mobileReducer from './slices/mobileSlice';
import mapOverlaySliceReducer from './slices/mapOverlaySlice';
import mobileMenuSlicerReducer from './slices/mobileMenuSlice';
import mobileFilterSliceReducer from './slices/mobileFilterSlice';
import facilitiesSliceReducer from './slices/facilitySlice';
import facilityTypesSliceReducer from './slices/facilityTypeSlice';
import amenititesSliceReducer from './slices/amenitySlice';
import serviceSliceReducer from './slices/servicesSlice';
import selectedFacilityReducer from './slices/selectedFacilitySlice';
import filtersReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    isMobile: mobileReducer,
    isMapOverlayShown: mapOverlaySliceReducer,
    isMobileMenuOpen: mobileMenuSlicerReducer,
    isMobileFilterOpen: mobileFilterSliceReducer,
    facilities: facilitiesSliceReducer,
    facilityTypes: facilityTypesSliceReducer,
    amenities: amenititesSliceReducer,
    services: serviceSliceReducer,
    selectedFacility: selectedFacilityReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
