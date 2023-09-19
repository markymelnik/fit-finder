import Axios from 'axios';
import { AppDispatch } from './store';
import { setFacilities, startFetching } from './slices/facilitySlice';
import { setFacilityTypes } from './slices/facilityTypeSlice';
import { setAmenities } from './slices/amenitySlice';
import { setServices } from './slices/servicesSlice';
import { addFavoritedFacilityToState } from './slices/favoritedFacilitySlice';

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

const fetchFavoritedFacilities = (userAccountId: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/favorites/list/${userAccountId}`);
    response.data.forEach((favoritedFacilityObject: any) => {
      dispatch(addFavoritedFacilityToState(favoritedFacilityObject));
    });
  } catch (err) {
    console.error("Error fetching favorited facilities");
  }
}

type AddFavoriteData = {
  userAccountId: string,
  facilityId: number
}

const addFavoritedFacility = (addFavoriteData: AddFavoriteData) => async (dispatch: AppDispatch) => {
  try {
    await Axios.post(`${import.meta.env.VITE_FFA_BE_URL}/api/favorites/add`, addFavoriteData);
    dispatch(fetchFavoritedFacilities(addFavoriteData.userAccountId));
  } catch(err) {
    console.error("Error adding favorite facility");
  }
}

const deleteFavoritedFacility = (favoritedFacilityObjectId: number) => async () => {
  try {
    await Axios.delete(`${import.meta.env.VITE_FFA_BE_URL}/api/favorites/${favoritedFacilityObjectId}`);
  } catch (err) {
    console.error("Error deleting favorited facility");
  }
}

export {
  fetchAllFacilities,
  fetchAllFacilityTypes,
  fetchFacilityTypeByFacilityId,
  fetchAllAmenities,
  fetchAmenitiesByFacilityId,
  fetchAllServices,
  fetchServicesByFacilityId,
  fetchFacilitiesByParameters,
  fetchFavoritedFacilities,
  addFavoritedFacility,
  deleteFavoritedFacility
};
