import { configureStore } from '@reduxjs/toolkit';
import mobileReducer from './slices/mobileSlice';
import mapOverlaySliceReducer from './slices/mapOverlaySlice';
import mobileMenuSlicerReducer from './slices/mobileMenuSlice';
import mobileFilterSliceReducer from './slices/mobileFilterSlice';
import loginFormSliceReducer from './slices/loginFormSlice';
import facilitiesSliceReducer from './slices/facilitySlice';
import facilityTypesSliceReducer from './slices/facilityTypeSlice';
import amenititesSliceReducer from './slices/amenitySlice';
import serviceSliceReducer from './slices/servicesSlice';
import selectedFacilityReducer from './slices/selectedFacilitySlice';
import filtersReducer from './slices/filterSlice';
import loginReducer from './authentication/login/loginReducer';
import registerReducer from './authentication/register/registerReducer';
import favoritedFacilityReducer from './slices/favoritedFacilitySlice';
import loadingReducer from './slices/loadingSlice';

const store = configureStore({
  reducer: {
    isMobile: mobileReducer,
    isMapOverlayShown: mapOverlaySliceReducer,
    isMobileMenuOpen: mobileMenuSlicerReducer,
    isMobileFilterOpen: mobileFilterSliceReducer,
    isLoginFormShown: loginFormSliceReducer,
    facilities: facilitiesSliceReducer,
    facilityTypes: facilityTypesSliceReducer,
    amenities: amenititesSliceReducer,
    services: serviceSliceReducer,
    selectedFacility: selectedFacilityReducer,
    filters: filtersReducer,
    login: loginReducer,
    register: registerReducer,
    favoritedFacility: favoritedFacilityReducer,
    loading: loadingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
