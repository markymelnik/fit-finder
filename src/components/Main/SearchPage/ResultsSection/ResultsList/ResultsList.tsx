import Card from '../../../Card/FacilityCard/FacilityCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { AppDispatch } from '../../../../../redux/store';
import { setSelectedFacility } from '../../../../../redux/slices/selectedFacilitySlice';
import { Facility } from '../../../../../types/types';
import EmptyResultsList from './EmptyResultsList';
import SkeletonCard from '../../../Card/SkeletonCard/SkeletonCard';
import './_results-list.scss';

const ResultsList = () => {
  const facilitiesByIds = useSelector((state: RootState) => state.facilities.byIds);
  const facilitiesAllIds = useSelector((state: RootState) => state.facilities.allIds);
  const isLoading = useSelector((state: RootState) => state.facilities.isLoading);
  const dispatch = useDispatch<AppDispatch>();

  const handleCardClick = (facility: Facility) => {
    dispatch(setSelectedFacility(facility));
  }

  let listOfFacilities;

  if (isLoading) {
    const numberOfSkeletons = 12;
    listOfFacilities = [];
    for (let i = 0; i < numberOfSkeletons; i++) {
      listOfFacilities.push(
        <SkeletonCard key={i} />
      )
    }
  } else if (facilitiesAllIds.length > 0) {
    listOfFacilities = facilitiesAllIds.map((facilityId) => {
      const facility = facilitiesByIds[facilityId];
      return (
        <Card
          key={facility.id}
          {...facility}
          onClick={() => handleCardClick(facility)}
        />
      );
    });
  } else {
    return (
      <div className="results-list-container">
        <EmptyResultsList />
      </div>
    )
  }

  return (
    <div className="results-list-container">
      <div className='results-list'>
        {listOfFacilities}
      </div>
    </div>
  );
};

export default ResultsList;
