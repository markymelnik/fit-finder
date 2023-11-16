import { ChangeEvent, FormEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SearchIconSVG from '../../assets/svg/SearchIconSVG';
import XMarkSVG from '../../assets/svg/XMarkSVG';
import useFacilitySearch from '../../hooks/useFacilitySearch';
import { setEnteredKeyword } from '../../redux/slices/filterSlice';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../redux/store';

interface SearchBarProps {
  containerClass: string;
  submitButtonClass: string;
  deleteButtonClass: string;
  placeholderText: string;
}

const SearchBarComponent = ({ containerClass, submitButtonClass, deleteButtonClass, placeholderText }: SearchBarProps ) => {

  const dispatch = useDispatch<AppDispatch>();
  const { executeSearch } = useFacilitySearch();
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
          name='search'
          value={enteredKeyword}
          onChange={handleInputChange}
          placeholder={placeholderText}
        />
        {enteredKeyword && (
          <button type="button" onClick={deleteInput} className={deleteButtonClass}>
            <XMarkSVG />
          </button>
        )}
        
        <button type='submit' className={submitButtonClass} aria-label="Search">
          <SearchIconSVG />
        </button>
      </form>
    </div>
  );
};

export default SearchBarComponent;