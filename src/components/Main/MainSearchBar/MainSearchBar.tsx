import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../redux/searchTermSlice';
import { useNavigate } from 'react-router-dom';

const MainSearchBar = () => {
  const searchTerm = useSelector((state) => state.searchTerm);

  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    dispath(setSearchTerm(event.target.value));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispath(setSearchTerm(`${searchTerm}`));
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className='main-search-bar'>
      <form onSubmit={handleSearchSubmit}>
        <input
          type='text'
          value={searchTerm}
          onChange={handleInputChange}
          placeholder='Search...'
        />
        <button type='submit'></button>
      </form>
    </div>
  );
};

export default MainSearchBar;
