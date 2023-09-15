import { useDispatch } from "react-redux";
import { resetAllFilters } from "../../../../redux/slices/filterSlice";
import './_filter-btns.scss';
import { fetchAllFacilities } from "../../../../redux/apiRequests";
import useFacilitySearch from "../../../../hooks/useFacilitySearch";

interface ResetFiltersButtonProps {
  customClass: string;
  buttonText: string;
}

const ResetFiltersButton = ({ customClass, buttonText }: ResetFiltersButtonProps) => {

  const dispatch = useDispatch();
  const executeSearch = useFacilitySearch();

  const handleReset = (event: any) => {
    event.preventDefault();
    dispatch(resetAllFilters());
    executeSearch();
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
