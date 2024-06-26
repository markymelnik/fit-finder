import { useSelector, useDispatch } from 'react-redux';

import FacilityCard from './FacilityCard/FacilityCard';
import NoResults from './NoResults/NoResults';
import SkeletonCard from './SkeletonCard/SkeletonCard';
import { setSelectedFacility } from '../../../../../../redux/slices/selectedFacilitySlice';
import { RootState } from '../../../../../../redux/store';
import { AppDispatch } from '../../../../../../redux/store';
import { Facility } from '../../../../../../types/types';
import './_result-cards.scss';
import SectionDivider from '../SectionDivider/SectionDivider';

const ResultCards = () => {
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
        <FacilityCard
          key={facility.id}
          {...facility}
          onClick={() => handleCardClick(facility)}
        />
      );
    });
  } else {
    return (
      <NoResults />
    )
  }

  return (
    <>
    <div className="result-cards-container">
      <div className='result-cards'>
        {listOfFacilities}
      </div>
    </div>
    <SectionDivider />
    </>
    
  );
};

export default ResultCards;
