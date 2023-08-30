import { Link } from 'react-router-dom';
import { Facility } from '../../../../../types/types';
import usePhotoLoader from '../../../../../hooks/usePhotoLoader';
import './_map.scss';

interface MapFacilityCard extends Facility {
  onClick: (facility: Facility) => void;
}

const MapFacilityCard = ({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services, onClick }: MapFacilityCard) => {

  const photo = usePhotoLoader(id);

  const handleClick = () => {
    onClick({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services });
  };

  return (
  <div className='map-facility-card'>
    <Link to='/facility' className="map-facility-card-photo" onClick={handleClick}>
      {photo && <img src={photo} alt="map facility card photo" />}
    </Link>
    <div className="map-facility-card-info">
      <div className="map-facility-card-name">{name}</div>
      <div className="map-facility-card-address">{address.toUpperCase()}, {postalCode.toUpperCase()}</div>
      <div className="map-facility-card-type">{facilityType.name.toUpperCase()}</div>
    </div>
    
  </div>
  )
};

export default MapFacilityCard;
