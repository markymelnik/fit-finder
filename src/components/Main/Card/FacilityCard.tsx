import { Link } from 'react-router-dom';
import { Facility } from '../../../types/types';
import './_card.scss';

interface FacilityCard extends Facility {
  onClick: (facility: Facility) => void;
}

const FacilityCard = ({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services, onClick }: FacilityCard) => {

  const handleClick = () => {
    onClick({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services });
  };
  
  return (
    <div className='facility-card-container'>
      <Link to={`/facility`} className='facility-photo-container' onClick={handleClick}>
        <img src={`/src/assets/images/main/facility_${id}.jpg`} alt="facility main photo" />
      </Link>
      <div className='facility-card-info'>
        <div className='facility-card-name'>{name}</div>
        <div className='facility-card-address'>{address.toUpperCase()}, {postalCode.toUpperCase()}</div>
        <div className='facility-card-type'>{facilityType.name.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default FacilityCard;