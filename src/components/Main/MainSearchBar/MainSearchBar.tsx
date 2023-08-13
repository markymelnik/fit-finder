import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setEnteredKeyword } from '../../../redux/enteredKeywordSlice';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';

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
          placeholder='Search...'
        />
        <button type='submit'></button>
      </form>
    </div>
  );
};

export default MainSearchBar;
