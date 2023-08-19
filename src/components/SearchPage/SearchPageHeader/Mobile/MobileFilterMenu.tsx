import { fetchAllAmenities, fetchAllFacilityTypes, fetchAllServices } from "../../../../redux/apiRequests";
import { setSelectedAmenities, setSelectedFacilityTypes, setSelectedServices } from "../../../../redux/slices/filterSlice";
import FilterCategory from "./FilterCategory";

const MobileFilterMenu = () => {
  return (
    <div className="mobile-filter-menu">
      <FilterCategory 
        fetchAll={fetchAllFacilityTypes}
        selector={(state) => state.facilityTypes}
        setSelected={setSelectedFacilityTypes}
        entityName={'Type'}
        categoryTitle={'FACILITY TYPES'}
      />
      <FilterCategory 
        fetchAll={fetchAllAmenities}
        selector={(state) => state.amenities}
        setSelected={setSelectedAmenities}
        entityName={'Amenity'}
        categoryTitle={'AMENITIES'}
      />
      <FilterCategory 
        fetchAll={fetchAllServices}
        selector={(state) => state.services}
        setSelected={setSelectedServices}
        entityName={'Service'}
        categoryTitle={'SERVICES'}
      />
    </div>
  )
}

export default MobileFilterMenu;