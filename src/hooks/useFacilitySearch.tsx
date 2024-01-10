import { useEffect, useRef } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchFacilitiesByParameters } from "../redux/apiRequests";
import { unsetResetFlag } from "../redux/slices/filterSlice";
import { resetPagination } from "../redux/slices/paginationSlice";
import { AppDispatch, RootState } from "../redux/store";

const useFacilitySearch = () => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const enteredKeyword = useSelector((state: RootState) => state.filters.enteredKeyword);
  const selectedFacilityTypes = useSelector((state: RootState) => state.filters.selectedFacilityTypes);
  const selectedAmenities = useSelector((state: RootState) => state.filters.selectedAmenities);
  const selectedOfferings = useSelector((state: RootState) => state.filters.selectedOfferings);
  const isReset = useSelector((state: RootState) => state.filters.isReset);
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);

  const prevPageRef = useRef(currentPage);

  useEffect(() => {
    if (isReset) {
      dispatch(resetPagination());
      dispatch(unsetResetFlag());
    }
  }, [isReset]);

  useEffect(() => {
    if (location.pathname === "/search" && prevPageRef.current !== currentPage) {
      executeSearch(currentPage);
    }
    prevPageRef.current = currentPage;
  }, [location.pathname, currentPage]);

  const executeSearch = (page: number) => {

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
      queryParams.push(`all`);
    }

    dispatch(fetchFacilitiesByParameters(enteredKeyword, selectedFacilityTypes, selectedAmenities, selectedOfferings, page, 12));

    navigate(`/search?${queryParams.join('&')}`);

  }

  return { executeSearch };

}

export default useFacilitySearch;
