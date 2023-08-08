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
  fetchAmenitiesByFacilityId,
};
