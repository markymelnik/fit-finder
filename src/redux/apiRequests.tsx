import Axios from 'axios';
import { AppDispatch } from './store';
import { setFacilities } from './facilitySlice';
import { setAmenities } from './amenitySlice';

const fetchAllFacilities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get('http://localhost:8080/api/facility');
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities', err);
  }
};

const fetchFacilitiesByKeyword = (keyword: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(
      'http://localhost:8080/api/facility/search',
      { params: { keyword } }
    );
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities', err);
  }
};

const fetchFacilitiesByAmenity = (selectedAmenities: string[]) => async (dispatch: AppDispatch) => {
  try {
    const params = new URLSearchParams();
    selectedAmenities.forEach(amenity => params.append('amenities', amenity));

    const response = await Axios.get(
      'http://localhost:8080/api/facility/search/amenity',
      { params }
    );
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities by amenity', err);
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

export {
  fetchAllFacilities,
  fetchFacilitiesByKeyword,
  fetchFacilitiesByAmenity,
  fetchAllAmenities,
  fetchAmenitiesByFacilityId,
};
