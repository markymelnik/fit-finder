import { setAmenities } from './slices/amenitySlice';
import { setAllFacilities, setPaginatedFacilities, startFetching } from './slices/facilitySlice';
import { setFacilityTypes } from './slices/facilityTypeSlice';
import { addFavoritedFacilityToState } from './slices/favoritedFacilitySlice';
import { setOfferings } from './slices/offeringSlice';
import { setTotalElements, setTotalPages } from './slices/paginationSlice';
import { setSelectedFacility } from './slices/selectedFacilitySlice';
import { AppDispatch } from './store';

const fetchAllFacilities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/facility`);
    if (!response.ok) {
      throw new Error('Error fetching facilities.');
    }
    const data = await response.json();
    dispatch(setPaginatedFacilities(data));
  } catch (err) {
    console.error('Error fetching facilities', err);
  }
};

const fetchFacilityByFacilityId = (facilityId: number, dispatch: AppDispatch) => async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/facility/${facilityId}`);
    if (!response.ok) {
      return new Error('Error fetching facility')
    }
    const data = await response.json();
    dispatch(setSelectedFacility(data));
  } catch (err) {
    console.error('Error fetching facility', err);
  }
}

const fetchAllFacilityTypes = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/types`);
    if (!response.ok) {
      return new Error('Error fetching facility types')
    }
    const data = await response.json();
    dispatch(setFacilityTypes(data));
  } catch (err) {
    console.error('Error fetching facility types', err);
  }
};

const fetchFacilityTypeByFacilityId = (facilityId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/${facilityId}/type`);
    if (!response.ok) {
      return new Error('Error fetching facility types')
    }
    const data = await response.json();
    dispatch(setFacilityTypes(data));
  } catch (err) {
    console.error('Error fetching facility types', err);
  }
}

const fetchAllAmenities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/amenities`);
    if (!response.ok) {
      return new Error('Error fetching amenities')
    }
    const data = await response.json();
    dispatch(setAmenities(data));
  } catch (err) {
    console.error('Error fetching amenities', err);
  }
};

const fetchAmenitiesByFacilityId = (facilityId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/facility/${facilityId}/amenities`);
    if (!response.ok) {
      return new Error('Error fetching amenities')
    }
    const data = await response.json();
    dispatch(setAmenities(data));
  } catch (err) {
    console.error('Error fetching amenities', err);
  }
};

const fetchAllOfferings = () => async (dispatch: AppDispatch) => {
  try { 
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/offerings`);
    if (!response.ok) {
      return new Error('Error fetching offerings')
    }
    const data = await response.json();
    dispatch(setOfferings(data));
  } catch (err) {
    console.error('Error fetching offerings', err);
  }
};

const fetchOfferingsByFacilityId = (facilityId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/facility/${facilityId}/offerings`);
    if (!response.ok) {
      return new Error('Error fetching offerings')
    }
    const data = await response.json();
    dispatch(setOfferings(data));
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

      const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/facility/search?${params.toString()}`);
      if (!response.ok) {
        return new Error('Error fetching facilities')
      }
      const data = await response.json();
      const { paginatedResults, allResults } = data;

      dispatch(setPaginatedFacilities(paginatedResults.content));
      dispatch(setAllFacilities(allResults));
      dispatch(setTotalElements(paginatedResults.totalElements));
      dispatch(setTotalPages(paginatedResults.totalPages));

    } catch (err) {
      console.error("Error fetching facilities", err);
    }
  };

const fetchFavoritedFacilities = (userAccountId: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/favorites/list/${userAccountId}`);
    if (!response.ok) {
      return new Error('Error fetching favorited facilities')
    }
    const data = await response.json();
    data.forEach((favoritedFacilityObject: any) => {
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
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/favorites/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addFavoriteData)
    });
    if (!response.ok) {
      throw new Error('Error adding favorite facility');
    }
    dispatch(fetchFavoritedFacilities(addFavoriteData.userAccountId));
  } catch(err) {
    console.error("Error adding favorite facility");
  }
}

const deleteFavoritedFacility = (favoritedFacilityObjectId: number) => async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/api/favorites/${favoritedFacilityObjectId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      return new Error('Error deleting favorited facility')
    }
  } catch (err) {
    console.error("Error deleting favorited facility");
  }
}

export {
  fetchAllFacilities,
  fetchFacilityByFacilityId,
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
