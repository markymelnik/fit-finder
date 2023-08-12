import { fetchAllAmenities, fetchAllFacilityTypes, fetchAllServices } from '../../../redux/apiRequests';
import { setSelectedAmenities, setSelectedFacilityTypes, setSelectedServices } from '../../../redux/filterSlice';
import FilterButton from './FilterButton';

const DesktopFilterMenu = () => {
  return (
    <div className='desktop-filter-menu'>
       <FilterButton
        fetchAll={fetchAllFacilityTypes}
        selector={(state) => state.facilityTypes}
        setSelected={setSelectedFacilityTypes}
        entityName='Type'
      />
      <FilterButton
        fetchAll={fetchAllAmenities}
        selector={(state) => state.amenities}
        setSelected={setSelectedAmenities}
        entityName='Amenity'
      />
      <FilterButton
        fetchAll={fetchAllServices}
        selector={(state) => state.services}
        setSelected={setSelectedServices}
        entityName='Service'
      />
    </div>
  );
};

export default DesktopFilterMenu;
