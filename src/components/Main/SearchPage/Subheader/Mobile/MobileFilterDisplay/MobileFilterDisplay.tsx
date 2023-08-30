import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setIsMobileFilterOpen } from "../../../../../../redux/slices/mobileFilterSlice";
import { useDispatch } from "react-redux";
import MobileFilterMenu from "./MobileFilterMenu/MobileFilterMenu";
import { useSelector } from "react-redux";
import SaveFiltersButton from "../../../FilterButtons/SaveFiltersButton";
import ResetFiltersButton from "../../../FilterButtons/ResetFiltersButton";
import './_mobile-filter-display.scss';

const MobileFilter = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMobileFilterOpen = useSelector((state: RootState) => state.isMobileFilterOpen.isMobileFilterOpen);

  const handleCloseMobileFilter = () => {
    dispatch(setIsMobileFilterOpen(false));
  }

  return (
    <div className={`mobile-filter-display-container ${isMobileFilterOpen ? 'active' : ''}`}>
      <div className="mobile-filter-header">
        <SaveFiltersButton customClass='mobile-filter-save-btn' buttonText='SAVE' onClick={handleCloseMobileFilter}/>
        <div className="mobile-filter-title">Filter Options</div>
        <ResetFiltersButton customClass='mobile-filter-reset-btn' buttonText='RESET' onClick={handleCloseMobileFilter}/>
      </div>
      <MobileFilterMenu />
      <div className="mobile-filter-done-btn-container">
        <SaveFiltersButton customClass='mobile-filter-done-btn' buttonText='DONE' onClick={handleCloseMobileFilter}/>
      </div>
    </div>
  )
}

export default MobileFilter;
