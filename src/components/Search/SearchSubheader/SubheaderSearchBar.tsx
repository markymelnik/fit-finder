import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { setEnteredKeyword } from '../../../redux/enteredKeywordSlice';
import { fetchAllFacilities, fetchFacilitiesByParameters } from '../../../redux/apiRequests';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { RootState } from '../../../redux/store';

const SubheaderSearchBar = () => {
  const enteredKeyword = useSelector((state: RootState) => state.filters.enteredKeyword);
  const selectedFacilityTypes = useSelector((state: RootState) => state.filters.selectedFacilityTypes);
  const selectedAmenities = useSelector((state: RootState) => state.filters.selectedAmenities);
  const selectedServices = useSelector((state: RootState) => state.filters.selectedServices);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEnteredKeyword(event.target.value));
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
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

  return (
    <div className='subheader-search-bar'>
      <form onSubmit={handleSearchSubmit}>
        <input
          type='text'
          value={enteredKeyword}
          onChange={handleInputChange}
          placeholder='Search...'
        />
        <button type='submit'></button>
      </form>
    </div>
  );
};

export default SubheaderSearchBar;
