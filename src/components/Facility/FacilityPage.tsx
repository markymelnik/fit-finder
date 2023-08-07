import FacilityPhoto from './FacilityPhoto';
import FacilityData from './FacilityData';
import FacilityNavigation from './FacilityNavigation';

const FacilityPage = () => {
  return (
    <div className='facility-container'>
      <FacilityPhoto />
      <FacilityData />
      <FacilityNavigation />
    </div>
  );
};

export default FacilityPage;
