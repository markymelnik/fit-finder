import { AppDispatch, RootState } from "../../../../redux/store";
import { setIsMobileFilterOpen } from "../../../../redux/slices/mobileFilterSlice";
import { useDispatch } from "react-redux";
import MobileFilterMenu from "./MobileFilterMenu";
import { useSelector } from "react-redux";

const MobileFilter = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMobileFilterOpen = useSelector((state: RootState) => state.isMobileFilterOpen.isMobileFilterOpen);

  const handleSaveButtonClick = () => {
    dispatch(setIsMobileFilterOpen(false));
  }

  return (
    <div className={`mobile-filter-container ${isMobileFilterOpen ? 'active' : ''}`}>
      <div className="mobile-filter-header">
        <button className="mobile-filter-back-btn" onClick={handleSaveButtonClick}>SAVE</button>
        <div className="mobile-filter-title">Filter Options</div>
        <button className="mobile-filter-reset-btn">RESET</button>
      </div>
      <MobileFilterMenu />
      <button className="mobile-filter-done-btn" onClick={handleSaveButtonClick}>Done</button>
    </div>
  )
}

export default MobileFilter;
