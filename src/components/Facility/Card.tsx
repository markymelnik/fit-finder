import { Link } from 'react-router-dom';
import { Facility } from '../../redux/types';

interface FacilityCard extends Facility {
  onClick: (facility: Facility) => void;
}

const Card = ({ id, name, facilityType, address, amenities, services, onClick }: FacilityCard) => {

  const handleClick = () => {
    onClick({ id, name, facilityType, address, amenities, services });
  };
  
  return (
    <div className='card-container'>
      <Link to='/facility' className='card-photo' onClick={handleClick}>
        <img />
      </Link>
      <div className='card-facility-info'>
        <div className='card-facility-name'>{name}</div>
        <div className='card-facility-type'>{facilityType.name}</div>
        <div className='card-facility-address'>{address}</div>
      </div>
    </div>
  );
};

export default Card;
