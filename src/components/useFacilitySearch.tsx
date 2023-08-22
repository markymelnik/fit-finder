import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchAllFacilities, fetchFacilitiesByParameters } from "../redux/apiRequests";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useFacilitySearch = () => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const enteredKeyword = useSelector((state: RootState) => state.filters.enteredKeyword);
  const selectedFacilityTypes = useSelector((state: RootState) => state.filters.selectedFacilityTypes);
  const selectedAmenities = useSelector((state: RootState) => state.filters.selectedAmenities);
  const selectedServices = useSelector((state: RootState) => state.filters.selectedServices);

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
    
    if (selectedServices.length) {
      selectedServices.forEach((service) =>
        queryParams.push(`services=${service}`)
      );
    }
    
    if (
      !enteredKeyword.trim() &&
      !selectedFacilityTypes &&
      !selectedAmenities.length &&
      !selectedServices.length
    ) {
      queryParams.push('query=all');
      dispatch(fetchAllFacilities());
    } else {
      dispatch(fetchFacilitiesByParameters(enteredKeyword, selectedFacilityTypes, selectedAmenities, selectedServices));
    }
  
    navigate(`/search?${queryParams.join('&')}`);
    
  }

  return executeSearch;

}

export default useFacilitySearch;
