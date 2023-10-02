import DropdownButton from './Dropdown/DropdownButton';
import { fetchAllAmenities, fetchAllFacilityTypes, fetchAllOfferings } from '../../../../../../redux/apiRequests';
import { setSelectedAmenities, setSelectedFacilityTypes, setSelectedOfferings } from '../../../../../../redux/slices/filterSlice';
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
        dropdownTitle='TYPES'
      />
      <DropdownButton
        fetchAllOptionsFromDatabase={fetchAllAmenities}
        fetchAllOptionsFromGlobalState={(state) => state.amenities}
        setSelectedOptions={setSelectedAmenities}
        fetchSelectedOptions={(state) => state.filters.selectedAmenities}
        entityName='Amenity'
        dropdownTitle=' AMENITIES'
      />
      <DropdownButton
        fetchAllOptionsFromDatabase={fetchAllOfferings}
        fetchAllOptionsFromGlobalState={(state) => state.offerings}
        setSelectedOptions={setSelectedOfferings}
        fetchSelectedOptions={(state) => state.filters.selectedOfferings}
        entityName='Offering'
        dropdownTitle="OFFERINGS"
      />
    </div>
  );
};

export default DesktopFilterMenu;
