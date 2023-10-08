import Axios from 'axios';

import { setAmenities } from './slices/amenitySlice';
import { setFacilities, startFetching } from './slices/facilitySlice';
import { setFacilityTypes } from './slices/facilityTypeSlice';
import { addFavoritedFacilityToState } from './slices/favoritedFacilitySlice';
import { setOfferings } from './slices/offeringSlice';
import { setTotalElements, setTotalPages } from './slices/paginationSlice';
import { AppDispatch } from './store';

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

const fetchAllOfferings = () => async (dispatch: AppDispatch) => {
  try { 
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/offerings`);
    dispatch(setOfferings(response.data));
  } catch (err) {
    console.error('Error fetching offerings', err);
  }
};

const fetchOfferingsByFacilityId = (facilityId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/facility/${facilityId}/offerings`);
    dispatch(setOfferings(response.data));
  } catch (err) {
    console.error('Error fetching offerings', err);
  }
};

const fetchFacilitiesByParameters =
  (
    enteredKeyword: string,
    selectedFacilityTypes: string[],
    selectedAmenities: string[],
    selectedOfferings: string[],
    currentPage: number,
    pageSize: number
  ) =>
  async (dispatch: AppDispatch) => {
    dispatch(startFetching());

    try {
      const params = new URLSearchParams();

      if (enteredKeyword) {
        params.append("enteredKeyword", enteredKeyword);
      }

      selectedFacilityTypes.forEach((facilityType) => params.append("facilityTypes", facilityType));
      selectedAmenities.forEach((amenity) => params.append("amenities", amenity));
      selectedOfferings.forEach((offering) => params.append("offerings", offering));

      params.append('page', `${currentPage - 1}`);
      params.append('size', `${pageSize}`);

      const response = await Axios.get(`${import.meta.env.VITE_FFA_BE_URL}/api/facility/search`, { params });
      const { content, totalPages, totalElements } = response.data;

      dispatch(setFacilities(content));
      dispatch(setTotalElements(totalElements));
      dispatch(setTotalPages(totalPages));

    } catch (err) {
      console.error("Error fetching facilities", err);
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
  fetchAllOfferings,
  fetchOfferingsByFacilityId,
  fetchFacilitiesByParameters,
  fetchFavoritedFacilities,
  addFavoritedFacility,
  deleteFavoritedFacility
};
