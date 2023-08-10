import Axios from 'axios';
import { AppDispatch } from './store';
import { setFacilities } from './facilitySlice';
import { setAmenities } from './amenitySlice';
import { setServices } from './servicesSlice';

const fetchAllFacilities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get('http://localhost:8080/api/facility');
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities', err);
  }
};

const fetchAllFacilityTypes = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get('http://localhost:8080/api/facility');
    dispatch(setFacilityTypes(response.data));
  } catch (err) {
    console.error('Error fetching facility types', err);
  }
};

const fetchAllAmenities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get('http://localhost:8080/api/amenities');
    dispatch(setAmenities(response.data));
  } catch (err) {
    console.error('Error fetching amenities', err);
  }
};

const fetchAmenitiesByFacilityId = (facilityId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`http://localhost:8080/api/facility/${facilityId}/amenities`);
    dispatch(setAmenities(response.data));
  } catch (err) {
    console.error('Error fetching amenities', err);
  }
};

const fetchAllServices = () => async (dispatch: AppDispatch) => {
  try { 
    const response = await Axios.get('http://localhost:8080/api/services');
    dispatch(setServices(response.data));
  } catch (err) {
    console.error('Error fetching services', err);
  }
};

const fetchServicesByFacilityId = (facilityId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`http://localhost:8080/api/facility/${facilityId}/services`);
    dispatch(setServices(response.data));
  } catch (err) {
    console.error('Error fetching services', err);
  }
};

const fetchFacilitiesByParameters = (keyword: string, selectedAmenities: string[], selectedServices: string[]) => async (dispatch: AppDispatch) => {
  try {
    const params = new URLSearchParams();

    if (keyword) {
      params.append('keyword', keyword);
    }
    
    selectedAmenities.forEach(amenity => params.append('amenities', amenity));
    selectedServices.forEach(service => params.append('services', service));

    const response = await Axios.get('http://localhost:8080/api/facility/search', { params } );
    console.log(response.data);
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities', err);
  }
};

export {
  fetchAllFacilities,
  fetchAllAmenities,
  fetchAmenitiesByFacilityId,
  fetchAllServices,
  fetchServicesByFacilityId,
  fetchFacilitiesByParameters
};
