import DropdownButton from './Dropdown/DropdownButton';
import { fetchAllAmenities, fetchAllFacilityTypes, fetchAllServices } from '../../../../../../redux/apiRequests';
import { setSelectedAmenities, setSelectedFacilityTypes, setSelectedServices } from '../../../../../../redux/slices/filterSlice';
import './_desktop-filter-menu.scss';

const DesktopFilterMenu = () => {

  return (
    <div className='desktop-filter-menu'>
       <DropdownButton
        fetchAllOptionsFromDatabase={fetchAllFacilityTypes}
        fetchAllOptionsFromGlobalState={(state) => state.facilityTypes}
        setSelectedOptions={setSelectedFacilityTypes}
        fetchSelectedOptions={(state) => state.filters.selectedFacilityTypes}
        entityName='Type'
        dropdownTitle='FACILITY TYPES'
      />
      <DropdownButton
        fetchAllOptionsFromDatabase={fetchAllAmenities}
        fetchAllOptionsFromGlobalState={(state) => state.amenities}
        setSelectedOptions={setSelectedAmenities}
        fetchSelectedOptions={(state) => state.filters.selectedAmenities}
        entityName='Amenity'
        dropdownTitle='OFFERED AMENITIES'
      />
      <DropdownButton
        fetchAllOptionsFromDatabase={fetchAllServices}
        fetchAllOptionsFromGlobalState={(state) => state.services}
        setSelectedOptions={setSelectedServices}
        fetchSelectedOptions={(state) => state.filters.selectedServices}
        entityName='Service'
        dropdownTitle="OFFERED SERVICES"
      />
    </div>
  );
};

export default DesktopFilterMenu;
