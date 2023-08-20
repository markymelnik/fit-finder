import Card from '../../../Card/FacilityCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { AppDispatch } from '../../../../redux/store';
import { setSelectedFacility } from '../../../../redux/slices/selectedFacilitySlice';
import { Facility } from '../../../../redux/types';
import EmptyResultsList from './EmptyResultsList';

const SearchResults = () => {
  const facilitiesByIds = useSelector((state: RootState) => state.facilities.byIds);
  const facilitiesAllIds = useSelector((state: RootState) => state.facilities.allIds);
  const dispatch = useDispatch<AppDispatch>();

  if (facilitiesAllIds.length === 0) {
    return <EmptyResultsList /> 
  }

  const handleCardClick = ({ id, name, address, postalCode, neighborhood, facilityType,  amenities, services }: Facility) => {
    const locationData = ({ id, name,  address, postalCode, neighborhood, facilityType, amenities, services });
    console.log(locationData);
    dispatch(setSelectedFacility(locationData));
  }
  
  return (
    <div className='search-results-list'>
      {facilitiesAllIds.map((facilityId) => {
        const facility = facilitiesByIds[facilityId];
        return (
          <Card
            key={facility.id}
            id={facility.id}
            name={facility.name}
            address={facility.address}
            postalCode={facility.postalCode}
            neighborhood={facility.neighborhood}
            facilityType={facility.facilityType}
            amenities={facility.amenities}
            services={facility.services}
            onClick={handleCardClick}
          />
        )
      })}
    </div>
  );
};

export default SearchResults;
