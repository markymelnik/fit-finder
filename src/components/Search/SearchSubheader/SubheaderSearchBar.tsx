import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { setSearchTerm } from '../../../redux/searchTermSlice';
import { fetchAllFacilities, fetchFacilitiesByKeywordAndAmenity } from '../../../redux/apiRequests';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { RootState } from '../../../redux/store';

const SubheaderSearchBar = () => {
  const searchTerm = useSelector((state: RootState) => state.searchTerm);
  const selectedAmenities = useSelector((state: RootState) => state.filters.selectedAmenities);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const queryParams = [];

    if (searchTerm.searchTerm.trim()) {
      queryParams.push(`query=${searchTerm.searchTerm}`);
    } 
    
    if (selectedAmenities.length) {
      selectedAmenities.forEach(amenity => queryParams.push(`amenities=${amenity}`));
    } 
    
    if (!searchTerm.searchTerm.trim() && !selectedAmenities.length) {
      queryParams.push('query=all');
      dispatch(fetchAllFacilities());
    } else {
      dispatch(fetchFacilitiesByKeywordAndAmenity(searchTerm.searchTerm, selectedAmenities));
    }

    navigate(`/search?${queryParams.join('&')}`);

  };

  return (
    <div className='subheader-search-bar'>
      <form onSubmit={handleSearchSubmit}>
        <input
          type='text'
          value={searchTerm.searchTerm}
          onChange={handleInputChange}
          placeholder='Search...'
        />
        <button type='submit'></button>
      </form>
    </div>
  );
};

export default SubheaderSearchBar;
