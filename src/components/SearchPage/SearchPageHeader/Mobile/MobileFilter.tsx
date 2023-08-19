import { AppDispatch } from "../../../../redux/store";
import { setIsMobileFilterOpen } from "../../../../redux/slices/mobileFilterSlice";
import { useDispatch } from "react-redux";
import MobileFilterMenu from "./MobileFilterMenu";

const MobileFilter = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleSaveButtonClick = () => {
    dispatch(setIsMobileFilterOpen(false));
  }

  return (
    <div className="mobile-filter-container">
      <div className="mobile-filter-header">
        <button className="mobile-filter-back-btn" onClick={handleSaveButtonClick}>Save</button>
        <div className="mobile-filter-title">Filter Options</div>
        <button className="mobile-filter-reset-btn">Reset</button>
      </div>
      <MobileFilterMenu />
      <button className="mobile-filter-save-btn" onClick={handleSaveButtonClick}>Save</button>
    </div>
  )
}

export default MobileFilter;
