import { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import handleSearchSubmit from "./handleSearchSubmit";
import { useNavigate } from "react-router-dom";

interface SaveFiltersButtonProps {
  customClass: string;
  buttonText: string;
  exitMobileFilterMenu: () => void;
}

const SaveFiltersButton = ({ customClass, buttonText, exitMobileFilterMenu }: SaveFiltersButtonProps) => {
  const enteredKeyword = useSelector((state: RootState) => state.filters.enteredKeyword);
  const selectedFacilityTypes = useSelector((state: RootState) => state.filters.selectedFacilityTypes);
  const selectedAmenities = useSelector((state: RootState) => state.filters.selectedAmenities);
  const selectedServices = useSelector((state: RootState) => state.filters.selectedServices);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSave = (event: MouseEvent<HTMLButtonElement>) => {
    handleSearchSubmit(
      event,
      enteredKeyword,
      selectedFacilityTypes,
      selectedAmenities,
      selectedServices,
      dispatch,
      navigate
    )
    exitMobileFilterMenu();
  }
  
  return (
    <button 
      className={customClass}
      onClick={handleSave}
    >
      {buttonText}
    </button>
  )
}

export default SaveFiltersButton;
