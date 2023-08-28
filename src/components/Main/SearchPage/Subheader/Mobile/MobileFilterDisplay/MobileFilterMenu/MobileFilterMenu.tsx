import { fetchAllAmenities, fetchAllFacilityTypes, fetchAllServices } from "../../../../../../../redux/apiRequests";
import { setSelectedAmenities, setSelectedFacilityTypes, setSelectedServices } from "../../../../../../../redux/slices/filterSlice";
import MobileFilterCategory from "./MobileFilterCategory/MobileFilterCategory";
import './_mobile-filter-menu.scss';

const MobileFilterMenu = () => {
  return (
    <div className="mobile-filter-menu-container">
      <MobileFilterCategory 
        fetchAllOptionsFromDatabase={fetchAllFacilityTypes}
        fetchAllOptionsFromGlobalState={(state) => state.facilityTypes}
        setSelectedOptions={setSelectedFacilityTypes}
        fetchSelectedOptions={(state) => state.filters.selectedFacilityTypes}
        entityName={'Type'}
        categoryTitle={'FACILITY TYPES'}
      />
      <MobileFilterCategory 
        fetchAllOptionsFromDatabase={fetchAllAmenities}
        fetchAllOptionsFromGlobalState={(state) => state.amenities}
        setSelectedOptions={setSelectedAmenities}
        fetchSelectedOptions={(state) => state.filters.selectedAmenities}
        entityName={'Amenity'}
        categoryTitle={'AMENITIES'}
      />
      <MobileFilterCategory 
        fetchAllOptionsFromDatabase={fetchAllServices}
        fetchAllOptionsFromGlobalState={(state) => state.services}
        setSelectedOptions={setSelectedServices}
        fetchSelectedOptions={(state) => state.filters.selectedServices}
        entityName={'Service'}
        categoryTitle={'SERVICES'}
      />
    </div>
  )
}

export default MobileFilterMenu;