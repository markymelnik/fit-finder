import { configureStore } from '@reduxjs/toolkit';
import viewportReducer from './slices/viewportSlice';
import mapOverlaySliceReducer from './slices/mapOverlaySlice';
import sidebarMenuSlicerReducer from './slices/sidebarMenuSlice';
import mobileFilterSliceReducer from './slices/mobileFilterSlice';
import authFormSliceReducer from './slices/authFormSlice';
import facilitiesSliceReducer from './slices/facilitySlice';
import facilityTypesSliceReducer from './slices/facilityTypeSlice';
import amenititesSliceReducer from './slices/amenitySlice';
import serviceSliceReducer from './slices/servicesSlice';
import selectedFacilityReducer from './slices/selectedFacilitySlice';
import filtersReducer from './slices/filterSlice';
import loginReducer from './auth/login/loginReducer';
import signupReducer from './auth/signup/signupReducer';
import favoritedFacilityReducer from './slices/favoritedFacilitySlice';
import loadingReducer from './slices/loadingSlice';
import checkmarkSuccessReducer from './slices/checkmarkSuccessSlice';
import accountMenuReducer from './slices/accountMenuSlice';
import successfulSignupReducer from './slices/successfulSignup';

const store = configureStore({
  reducer: {
    viewport: viewportReducer,
    mapOverlay: mapOverlaySliceReducer,
    sidebarMenu: sidebarMenuSlicerReducer,
    mobileFilter: mobileFilterSliceReducer,
    authForm: authFormSliceReducer,
    facilities: facilitiesSliceReducer,
    facilityTypes: facilityTypesSliceReducer,
    amenities: amenititesSliceReducer,
    services: serviceSliceReducer,
    selectedFacility: selectedFacilityReducer,
    filters: filtersReducer,
    login: loginReducer,
    signup: signupReducer,
    favoritedFacility: favoritedFacilityReducer,
    loading: loadingReducer,
    checkmarkSuccess: checkmarkSuccessReducer,
    accountMenu: accountMenuReducer,
    successfulSignup: successfulSignupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
