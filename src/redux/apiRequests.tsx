import Axios from 'axios';
import { AppDispatch } from './store';
import { setFacilities, setError } from './facilitySlice';

const fetchAllFacilities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get('http://localhost:8080/api/facility');
    dispatch(setFacilities(response.data));
  } catch (err) {
    console.error('Error fetching facilities', err);
    const error = err as Error;
    dispatch(setError(error.message || 'Unknown error'));
  }
};

const fetchFacilitiesByKeyword =
  (keyword: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await Axios.get(
        'http://localhost:8080/api/facility/search',
        { params: { keyword } }
      );
      dispatch(setFacilities(response.data));
    } catch (err) {
      console.error('Error fetching facilities', err);
      const error = err as Error;
      dispatch(setError(error.message || 'Unknown error'));
    }
  };

export { fetchAllFacilities, fetchFacilitiesByKeyword };
