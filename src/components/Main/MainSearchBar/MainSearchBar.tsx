import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setSearchTerm } from '../../../redux/searchTermSlice';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';

const MainSearchBar = () => {
  const searchTerm = useSelector((state: RootState) => state.searchTerm);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchTerm(`${searchTerm.searchTerm}`));
    navigate(`/search?query=${searchTerm.searchTerm}`);
  };

  return (
    <div className='main-search-bar'>
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

export default MainSearchBar;
