import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

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
  const facilityTypes = useSelector((state: RootState) => state.facilityTypes);
  const amenities = useSelector((state: RootState) => state.amenities);
  const offerings = useSelector((state: RootState) => state.offerings);

  useEffect(() => {
    if (!facilityTypes.allIds.length) {
      dispatch(fetchAllFacilityTypes());
    }
    if (!amenities.allIds.length) {
      dispatch(fetchAllAmenities());
    }
    if (!offerings.allIds.length) {
      dispatch(fetchAllOfferings());
    }
  }, [dispatch]);

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
          fetchAllOptionsFromGlobalState={(state) => state.facilityTypes}
          setSelectedOptions={setSelectedFacilityTypes}
          fetchSelectedOptions={(state) => state.filters.selectedFacilityTypes}
          entityName={'Type'}
          categoryTitle={'TYPES'}
          categoryDescription={`Display locations you're interested in`}
        />
        <MobileFilterOptions 
          fetchAllOptionsFromGlobalState={(state) => state.amenities}
          setSelectedOptions={setSelectedAmenities}
          fetchSelectedOptions={(state) => state.filters.selectedAmenities}
          entityName={'Amenity'}
          categoryTitle={'AMENITIES'}
          categoryDescription={`Display locations with any selected amenity`}
        />
        <MobileFilterOptions 
          fetchAllOptionsFromGlobalState={(state) => state.offerings}
          setSelectedOptions={setSelectedOfferings}
          fetchSelectedOptions={(state) => state.filters.selectedOfferings}
          entityName={'Offering'}
          categoryTitle={'OFFERINGS'}
          categoryDescription={`Display locations with any selected offering`}
        />
      <div className="mobile-filter-done-btn-container">
        <SaveFiltersButton customClass='mobile-filter-done-btn' buttonText='Done' onClick={handleCloseMobileFilter}/>
      </div>
    </div>
  )
}

export default MobileFilterMenu;
