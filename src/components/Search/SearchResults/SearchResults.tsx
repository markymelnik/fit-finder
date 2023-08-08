import Card from '../../Facility/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { AppDispatch } from '../../../redux/store';
import { setSelectedFacility } from '../../../redux/selectedFacilitySlice';
import { Facility } from '../../../redux/types';

const ResultsList = () => {
  const facilitiesByIds = useSelector((state: RootState) => state.facilities.byIds);
  const facilitiesAllIds = useSelector((state: RootState) => state.facilities.allIds);
  const dispatch = useDispatch<AppDispatch>();

  if (facilitiesAllIds.length === 0) {
    return <p>No results found for your query.</p>
  }

  const handleCardClick = ({ id, name, type, address, amenities }: Facility) => {
    const locationData = ({ id, name, type, address, amenities });
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
            type={facility.type}
            address={facility.address}
            amenities={facility.amenities}
            onClick={handleCardClick}
          />
        )
      })}
    </div>
  );
};

export default ResultsList;
