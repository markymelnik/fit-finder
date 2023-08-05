import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { setSearchTerm } from '../../../redux/searchTermSlice';
import { fetchAllFacilities } from '../../../redux/apiRequests';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { RootState } from '../../../redux/store';

const SubheaderSearchBar = () => {
  const searchTerm = useSelector((state: RootState) => state.searchTerm);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchTerm(`${searchTerm.searchTerm}`));
    navigate(`/search?query=${searchTerm.searchTerm}`);
    dispatch(fetchAllFacilities());
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
