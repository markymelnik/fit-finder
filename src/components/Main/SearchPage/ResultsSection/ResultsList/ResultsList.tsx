import Card from '../../../Card/FacilityCard/FacilityCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { AppDispatch } from '../../../../../redux/store';
import { setSelectedFacility } from '../../../../../redux/slices/selectedFacilitySlice';
import { Facility } from '../../../../../types/types';
import EmptyResultsList from './EmptyResultsList';
import './_results-list.scss';

const SearchResults = () => {
  const facilitiesByIds = useSelector((state: RootState) => state.facilities.byIds);
  const facilitiesAllIds = useSelector((state: RootState) => state.facilities.allIds);
  const dispatch = useDispatch<AppDispatch>();

  if (facilitiesAllIds.length === 0) {
    return <EmptyResultsList /> 
  }

  const handleCardClick = ({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services }: Facility) => {
    const locationData = ({ id, name,  address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services });
    dispatch(setSelectedFacility(locationData));
  }

  return (
    <div className="results-list-container">
      <div className='results-list'>
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
              latitude={facility.latitude}
              longitude={facility.longitude}
              facilityType={facility.facilityType}
              amenities={facility.amenities}
              services={facility.services}
              onClick={handleCardClick}
            />
          )
        })}
      </div>
    </div>
  );
};

export default SearchResults;
