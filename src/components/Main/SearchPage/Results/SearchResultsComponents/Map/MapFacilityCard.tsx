import { Link } from 'react-router-dom';
import { Facility } from '../../../../../../types/types';

interface MapFacilityCard extends Facility {
  onClick: (facility: Facility) => void;
}

const MapFacilityCard = ({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services, onClick }: MapFacilityCard) => {

  const handleClick = () => {
    onClick({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services });
  };

  return (
  <div className='map-marker-facility'>
    <Link to='/facility' className="map-marker-facility-photo" onClick={handleClick}></Link>
    <div className="map-marker-facility-info">
      <div className="map-marker-facility-name">{name.toUpperCase()}</div>
      <div className="map-marker-facility-address">{address}</div>
      <div className="map-marker-facility-type">{facilityType.name}</div>
    </div>
    
  </div>
  )
};

export default MapFacilityCard;
