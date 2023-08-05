import Axios from 'axios';
import { AppDispatch } from './store';
import { setLocations, setError } from './locationsSlice';

const fetchAllFacilities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get('http://localhost:8080/api/facility');
    dispatch(setLocations(response.data));
  } catch (err) {
    console.error('Error fetching locations', err);
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
      dispatch(setLocations(response.data));
    } catch (err) {
      console.error('Error fetching locations', err);
      const error = err as Error;
      dispatch(setError(error.message || 'Unknown error'));
    }
  };

export { fetchAllFacilities, fetchFacilitiesByKeyword };
