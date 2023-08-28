import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setEnteredKeyword } from '../../redux/slices/filterSlice';
import { ChangeEvent, FormEvent } from 'react';
import { RootState } from '../../redux/store';
import SearchIcon from '../../assets/icons/search/search-icon.png'
import DeleteIcon from '../../assets/icons/search/delete-icon.png';
import useFacilitySearch from '../../hooks/useFacilitySearch';

interface SearchbarProps {
  containerClass: string;
  submitButtonClass: string;
  deleteButtonClass: string;
  placeholderText: string;
}

const Searchbar = ({ containerClass, submitButtonClass, deleteButtonClass, placeholderText }: SearchbarProps ) => {

  const dispatch = useDispatch<AppDispatch>();
  const executeSearch = useFacilitySearch();
  const enteredKeyword = useSelector((state: RootState) => state.filters.enteredKeyword);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEnteredKeyword(event.target.value));
  };

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    executeSearch();
  }

  const deleteInput = (event: any) => {
    event.preventDefault();
    dispatch(setEnteredKeyword(''));
    
  };

  return (
    <div className={containerClass}>
      <form onSubmit={onSearchSubmit}>
        <input
          type='text'
          value={enteredKeyword}
          onChange={handleInputChange}
          placeholder={placeholderText}
        />
        {enteredKeyword && (
          <button type="button" onClick={deleteInput} style={{ backgroundImage: `url(${DeleteIcon})`}} className={deleteButtonClass}></button>
        )}
        
        <button type='submit' style={{ backgroundImage: `url(${SearchIcon})`}} className={submitButtonClass}></button>
      </form>
    </div>
  );
};

export default Searchbar;