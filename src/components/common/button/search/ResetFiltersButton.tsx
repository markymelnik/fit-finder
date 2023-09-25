import { useDispatch } from 'react-redux';

import { resetAllFilters } from '../../../../redux/slices/filterSlice';
import { AppDispatch } from '../../../../redux/store';
import './_filter-btns.scss';

interface ResetFiltersButtonProps {
  customClass: string;
  buttonText: string;
}

const ResetFiltersButton = ({ customClass, buttonText }: ResetFiltersButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleReset = (event: any) => {
    event.preventDefault();
    dispatch(resetAllFilters());
  }
  
  return (
    <button 
      className={customClass}
      onClick={(event) => handleReset(event)}
    >
      {buttonText}
    </button>
  )
}

export default ResetFiltersButton;
