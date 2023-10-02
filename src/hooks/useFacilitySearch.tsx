import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchAllFacilities, fetchFacilitiesByParameters } from "../redux/apiRequests";
import { acknowledgeUpdate, unsetResetFlag } from "../redux/slices/filterSlice";
import { AppDispatch, RootState } from "../redux/store";

const useFacilitySearch = () => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const enteredKeyword = useSelector((state: RootState) => state.filters.enteredKeyword);
  const selectedFacilityTypes = useSelector((state: RootState) => state.filters.selectedFacilityTypes);
  const selectedAmenities = useSelector((state: RootState) => state.filters.selectedAmenities);
  const selectedOfferings = useSelector((state: RootState) => state.filters.selectedOfferings);
  const hasUpdated = useSelector((state: RootState) => state.filters.hasUpdated);
  const isReset = useSelector((state: RootState) => state.filters.isReset);

  useEffect(() => {
    if (isReset) {
      executeSearch();
      dispatch(unsetResetFlag());
    }
  }, [isReset]);

  useEffect(() => {
    if (hasUpdated) {
      executeSearch();
      dispatch(acknowledgeUpdate());
    }
  }, [hasUpdated]);

  const executeSearch = () => {

    const queryParams = [];

    if (enteredKeyword.trim()) {
      queryParams.push(`query=${enteredKeyword}`);
    } 

    if (selectedFacilityTypes.length) {
      selectedFacilityTypes.forEach((facilityType) =>
        queryParams.push(`facilityTypes=${facilityType}`)
      );
    }
    
    if (selectedAmenities.length) {
      selectedAmenities.forEach((amenity) =>
        queryParams.push(`amenities=${amenity}`)
      );
    }
    
    if (selectedOfferings.length) {
      selectedOfferings.forEach((service) =>
        queryParams.push(`services=${service}`)
      );
    }
    
    if (
      !enteredKeyword.trim() &&
      !selectedFacilityTypes.length &&
      !selectedAmenities.length &&
      !selectedOfferings.length
    ) {
      queryParams.push('query=all');
      
      dispatch(fetchAllFacilities());
    } else {
      dispatch(fetchFacilitiesByParameters(enteredKeyword, selectedFacilityTypes, selectedAmenities, selectedOfferings));
    }
  
    navigate(`/search?${queryParams.join('&')}`);

    dispatch(acknowledgeUpdate());
    
  }

  return executeSearch;

}

export default useFacilitySearch;
