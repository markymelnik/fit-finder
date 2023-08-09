import Axios from 'axios';
import { AppDispatch } from './store';
import { setFacilities } from './facilitySlice';
import { setAmenities } from './amenitySlice';
import { setServices } from './serviceSlice';

const fetchAllFacilities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get('http://localhost:8080/api/facility');
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities', err);
  }
};

const fetchFacilitiesByKeywordAndAmenity = (keyword: string, selectedAmenities: string[]) => async (dispatch: AppDispatch) => {
  try {
    const params = new URLSearchParams();

    if (keyword) {
      params.append('keyword', keyword);
    }
    
    selectedAmenities.forEach(amenity => params.append('amenities', amenity));

    const response = await Axios.get('http://localhost:8080/api/facility/search', { params } );
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities', err);
  }
};

const fetchAllAmenities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get('http://localhost:8080/api/amenity');
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
    const response = await Axios.get('http://localhost:8080/api/service');
    dispatch(setServices(response.data));
  } catch (err) {
    console.error('Error fetching services', err);
  }
}

export {
  fetchAllFacilities,
  fetchFacilitiesByKeywordAndAmenity,
  fetchAllAmenities,
  fetchAmenitiesByFacilityId,
  fetchAllServices
};
