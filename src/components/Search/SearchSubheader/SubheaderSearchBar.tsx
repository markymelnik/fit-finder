import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../redux/searchTermSlice';
import { useNavigate } from 'react-router-dom';

const SubheaderSearchBar = () => {
  const searchTerm = useSelector((state) => state.searchTerm);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchTerm(`${searchTerm}`));
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className='subheader-search-bar'>
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

export default SubheaderSearchBar;
