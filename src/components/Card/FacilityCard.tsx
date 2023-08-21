import { Link } from 'react-router-dom';
import { Facility } from '../../redux/types';

interface FacilityCard extends Facility {
  onClick: (facility: Facility) => void;
}

const FacilityCard = ({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services, onClick }: FacilityCard) => {

  const handleClick = () => {
    onClick({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services });
  };
  
  return (
    <div className='facility-card-container'>
      <Link to='/facility' className='facility-card-photo' onClick={handleClick}>
        <img />
      </Link>
      <div className='facility-card-info'>
        <div className='facility-card-name'>{name}</div>
        <div className='facility-card-address'>{address}, {postalCode}</div>
        <div className='facility-card-type'>{facilityType.name}</div>
      </div>
    </div>
  );
};

export default FacilityCard;
