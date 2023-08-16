import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setEnteredKeyword } from '../redux/slices/filterSlice';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { RootState } from '../redux/store';
import SearchIcon from '../assets/imgs/search-icon.png'
import DeleteIcon from '../assets/imgs/delete-icon.png';
import handleSearchSubmit from './handleSearchSubmit';
import handleSearchInputDelete from './handleSearchInputDelete';

interface SearchBarProps {
  containerClass: string;
  submitButtonClass: string;
  deleteButtonClass: string;
  placeholderText: string;
}

const SearchBar = ({ containerClass, submitButtonClass, deleteButtonClass, placeholderText }: SearchBarProps ) => {
  const enteredKeyword = useSelector((state: RootState) => state.filters.enteredKeyword);
  const selectedFacilityTypes = useSelector((state: RootState) => state.filters.selectedFacilityTypes);
  const selectedAmenities = useSelector((state: RootState) => state.filters.selectedAmenities);
  const selectedServices = useSelector((state: RootState) => state.filters.selectedServices);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const deleteInput = handleSearchInputDelete();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEnteredKeyword(event.target.value));
  };

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    handleSearchSubmit(
      event,
      enteredKeyword,
      selectedFacilityTypes,
      selectedAmenities,
      selectedServices,
      dispatch,
      navigate
    )
  }

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

export default SearchBar;