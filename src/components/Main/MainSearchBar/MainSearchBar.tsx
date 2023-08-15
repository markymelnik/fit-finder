import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setEnteredKeyword } from '../../../redux/slices/filterSlice';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import SearchIcon from '../../../assets/imgs/search-icon.png';

const MainSearchBar = () => {
  const enteredKeyword = useSelector((state: RootState) => state.filters.enteredKeyword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEnteredKeyword(enteredKeyword));
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setEnteredKeyword(`${enteredKeyword}`));
    navigate(`/search?query=${enteredKeyword}`);
  };

  return (
    <div className='main-search-bar'>
      <form onSubmit={handleSearchSubmit}>
        <input
          type='text'
          value={enteredKeyword}
          onChange={handleInputChange}
          placeholder='Enter a name, address, neighborhood, or ZIP code...'
        />
        <button type='submit' style={{ backgroundImage: `url(${SearchIcon})`}}></button>
      </form>
    </div>
  );
};

export default MainSearchBar;
