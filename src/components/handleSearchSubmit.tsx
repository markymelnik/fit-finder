import { FormEvent, MouseEvent } from "react";
import { AppDispatch } from "../redux/store";
import { fetchAllFacilities, fetchFacilitiesByParameters } from "../redux/apiRequests";

const handleSearchSubmit = (
  event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
  enteredKeyword: string,
  selectedFacilityTypes: string[],
  selectedAmenities: string[],
  selectedServices: string[],
  dispatch: AppDispatch,
  navigate: (arg0: string) => void
) => {

  event.preventDefault();

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

};

export default handleSearchSubmit;