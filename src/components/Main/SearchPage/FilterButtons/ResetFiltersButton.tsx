import { useDispatch } from "react-redux";
import { resetAllFilters } from "../../../../redux/slices/filterSlice";
import './_filter-btns.scss';

interface ResetFiltersButtonProps {
  customClass: string;
  buttonText: string;
  onClick: () => void;
}

const ResetFiltersButton = ({ customClass, buttonText, onClick }: ResetFiltersButtonProps) => {

  const dispatch = useDispatch();

  const handleReset = (event: any) => {
    event.preventDefault();
    dispatch(resetAllFilters());
    onClick();
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
