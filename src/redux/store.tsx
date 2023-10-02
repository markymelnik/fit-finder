import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './auth/login/loginReducer';
import signupReducer from './auth/signup/signupReducer';
import accountMenuReducer from './slices/accountMenuSlice';
import amenititesSliceReducer from './slices/amenitySlice';
import authFormSliceReducer from './slices/authFormSlice';
import checkmarkSuccessReducer from './slices/checkmarkSuccessSlice';
import facilitiesSliceReducer from './slices/facilitySlice';
import facilityTypesSliceReducer from './slices/facilityTypeSlice';
import favoritedFacilityReducer from './slices/favoritedFacilitySlice';
import filtersReducer from './slices/filterSlice';
import loadingReducer from './slices/loadingSlice';
import mapOverlaySliceReducer from './slices/mapOverlaySlice';
import mobileFilterSliceReducer from './slices/mobileFilterSlice';
import offeringsSliceReducer from './slices/offeringSlice';
import selectedFacilityReducer from './slices/selectedFacilitySlice';
import sidebarMenuSlicerReducer from './slices/sidebarMenuSlice';
import successfulSignupReducer from './slices/successfulSignup';
import viewportReducer from './slices/viewportSlice';

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
    offerings: offeringsSliceReducer,
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
