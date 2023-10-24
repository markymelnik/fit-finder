import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import DropdownButton from './Dropdown/DropdownButton';
import { fetchAllAmenities, fetchAllFacilityTypes, fetchAllOfferings } from '../../../../../../redux/apiRequests';
import { resetSelectedAmenities, resetSelectedFacilityTypes, resetSelectedOfferings, setSelectedAmenities, setSelectedFacilityTypes, setSelectedOfferings } from '../../../../../../redux/slices/filterSlice';
import { AppDispatch, RootState } from '../../../../../../redux/store';
import './_desktop-filter-menu.scss';

const DesktopFilterMenu = () => {

  const dispatch = useDispatch<AppDispatch>();
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

  return (
    <div className='desktop-filter-menu'>
       <DropdownButton
        fetchAllOptionsFromGlobalState={(state) => state.facilityTypes}
        setSelectedOptions={setSelectedFacilityTypes}
        resetSelectedOptions={resetSelectedFacilityTypes}
        fetchSelectedOptions={(state) => state.filters.selectedFacilityTypes}
        entityName='Type'
        dropdownTitle='TYPES'
      />
      <DropdownButton
        fetchAllOptionsFromGlobalState={(state) => state.amenities}
        setSelectedOptions={setSelectedAmenities}
        resetSelectedOptions={resetSelectedAmenities}
        fetchSelectedOptions={(state) => state.filters.selectedAmenities}
        entityName='Amenity'
        dropdownTitle=' AMENITIES'
      />
      <DropdownButton
        fetchAllOptionsFromGlobalState={(state) => state.offerings}
        setSelectedOptions={setSelectedOfferings}
        resetSelectedOptions={resetSelectedOfferings}
        fetchSelectedOptions={(state) => state.filters.selectedOfferings}
        entityName='Offering'
        dropdownTitle="OFFERINGS"
      />
    </div>
  );
};

export default DesktopFilterMenu;
