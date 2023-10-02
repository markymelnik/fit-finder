import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import MobileFilterOptions from "./MobileFilterOptions/MobileFilterOptions";
import { fetchAllAmenities, fetchAllFacilityTypes, fetchAllOfferings } from "../../../../../../redux/apiRequests";
import { setSelectedAmenities, setSelectedFacilityTypes, setSelectedOfferings } from "../../../../../../redux/slices/filterSlice";
import { setIsMobileFilterOpen } from "../../../../../../redux/slices/mobileFilterSlice";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import ResetFiltersButton from "../../../../../common/button/search/ResetFiltersButton";
import SaveFiltersButton from "../../../../../common/button/search/SaveFiltersButton";
import './_mobile-filter-menu.scss';

const MobileFilterMenu = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMobileFilterOpen = useSelector((state: RootState) => state.mobileFilter.isMobileFilterOpen);

  const handleCloseMobileFilter = () => {
    dispatch(setIsMobileFilterOpen(false));
  }

  return (
    <div className={`mobile-filter-menu-container ${isMobileFilterOpen ? 'active' : ''}`}>
      <div className="mobile-filter-menu-header">
        <SaveFiltersButton customClass='mobile-filter-save-btn' buttonText='SAVE' onClick={handleCloseMobileFilter}/>
        <div className="mobile-filter-menu-title">Filter Options</div>
        <ResetFiltersButton customClass='mobile-filter-reset-btn' buttonText='RESET' />
      </div>
        <MobileFilterOptions 
          fetchAllOptionsFromDatabase={fetchAllFacilityTypes}
          fetchAllOptionsFromGlobalState={(state) => state.facilityTypes}
          setSelectedOptions={setSelectedFacilityTypes}
          fetchSelectedOptions={(state) => state.filters.selectedFacilityTypes}
          entityName={'Type'}
          categoryTitle={'FACILITY TYPES'}
        />
        <MobileFilterOptions 
          fetchAllOptionsFromDatabase={fetchAllAmenities}
          fetchAllOptionsFromGlobalState={(state) => state.amenities}
          setSelectedOptions={setSelectedAmenities}
          fetchSelectedOptions={(state) => state.filters.selectedAmenities}
          entityName={'Amenity'}
          categoryTitle={'AMENITIES'}
        />
        <MobileFilterOptions 
          fetchAllOptionsFromDatabase={fetchAllOfferings}
          fetchAllOptionsFromGlobalState={(state) => state.offerings}
          setSelectedOptions={setSelectedOfferings}
          fetchSelectedOptions={(state) => state.filters.selectedOfferings}
          entityName={'Offering'}
          categoryTitle={'OFFERINGS'}
        />
      <div className="mobile-filter-done-btn-container">
        <SaveFiltersButton customClass='mobile-filter-done-btn' buttonText='Done' onClick={handleCloseMobileFilter}/>
      </div>
    </div>
  )
}

export default MobileFilterMenu;
