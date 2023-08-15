import Card from '../../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { AppDispatch } from '../../../redux/store';
import { setSelectedFacility } from '../../../redux/slices/selectedFacilitySlice';
import { Facility } from '../../../redux/types';

const ResultsList = () => {
  const facilitiesByIds = useSelector((state: RootState) => state.facilities.byIds);
  const facilitiesAllIds = useSelector((state: RootState) => state.facilities.allIds);
  const dispatch = useDispatch<AppDispatch>();

  if (facilitiesAllIds.length === 0) {
    return <p>No results found for your query.</p>
  }

  const handleCardClick = ({ id, name, facilityType, address, amenities, services }: Facility) => {
    const locationData = ({ id, name, facilityType, address, amenities, services });
    dispatch(setSelectedFacility(locationData));
  }
  
  return (
    <div className='results-list'>
      {facilitiesAllIds.map((facilityId) => {
        const facility = facilitiesByIds[facilityId];
        return (
          <Card
            key={facility.id}
            id={facility.id}
            name={facility.name}
            facilityType={facility.facilityType}
            address={facility.address}
            amenities={facility.amenities}
            services={facility.services}
            onClick={handleCardClick}
          />
        )
      })}
    </div>
  );
};

export default ResultsList;
