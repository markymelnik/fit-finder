import { useDispatch } from "react-redux";
import { resetAllFilters } from "../../../../../../../../redux/slices/filterSlice";
import './_mobile-filter-btns.scss';

interface ResetFiltersButtonProps {
  customClass: string;
  buttonText: string;
}

const ResetFiltersButton = ({ customClass, buttonText }: ResetFiltersButtonProps) => {

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetAllFilters());
  }
  
  return (
    <button 
      className={customClass}
      onClick={handleReset}
    >
      {buttonText}
    </button>
  )
}

export default ResetFiltersButton;
