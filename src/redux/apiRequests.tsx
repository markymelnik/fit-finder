import Axios from 'axios';
import { AppDispatch } from './store';
import { setFacilities, startFetching } from './slices/facilitySlice';
import { setFacilityTypes } from './slices/facilityTypeSlice';
import { setAmenities } from './slices/amenitySlice';
import { setServices } from './slices/servicesSlice';

const fetchAllFacilities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/facility`);
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities', err);
  }
};

const fetchAllFacilityTypes = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/types`);
    dispatch(setFacilityTypes(response.data));
  } catch (err) {
    console.error('Error fetching facility types', err);
  }
};

const fetchFacilityTypeByFacilityId = (facilityId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/${facilityId}/type`);
    dispatch(setFacilityTypes(response.data));
  } catch (err) {
    console.log('Error fetching facility types', err);
  }
}

const fetchAllAmenities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/amenities`);
    dispatch(setAmenities(response.data));
  } catch (err) {
    console.error('Error fetching amenities', err);
  }
};

const fetchAmenitiesByFacilityId = (facilityId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/facility/${facilityId}/amenities`);
    dispatch(setAmenities(response.data));
  } catch (err) {
    console.error('Error fetching amenities', err);
  }
};

const fetchAllServices = () => async (dispatch: AppDispatch) => {
  try { 
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/services`);
    dispatch(setServices(response.data));
  } catch (err) {
    console.error('Error fetching services', err);
  }
};

const fetchServicesByFacilityId = (facilityId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/facility/${facilityId}/services`);
    dispatch(setServices(response.data));
  } catch (err) {
    console.error('Error fetching services', err);
  }
};

const fetchFacilitiesByParameters = (enteredKeyword: string, selectedFacilityTypes: string[], selectedAmenities: string[], selectedServices: string[]) => async (dispatch: AppDispatch) => {

  dispatch(startFetching());

  try {
    const params = new URLSearchParams();

    if (enteredKeyword) {
      params.append('enteredKeyword', enteredKeyword);
    }
    
    selectedFacilityTypes.forEach((facilityType) => params.append('facilityTypes', facilityType));
    selectedAmenities.forEach(amenity => params.append('amenities', amenity));
    selectedServices.forEach(service => params.append('services', service));

    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/facility/search`, { params } );
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities', err);
  }
};

export {
  fetchAllFacilities,
  fetchAllFacilityTypes,
  fetchFacilityTypeByFacilityId,
  fetchAllAmenities,
  fetchAmenitiesByFacilityId,
  fetchAllServices,
  fetchServicesByFacilityId,
  fetchFacilitiesByParameters
};
