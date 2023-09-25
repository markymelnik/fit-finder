import { Link } from 'react-router-dom';

import usePhotoLoader from '../../../../../../../hooks/usePhotoLoader';
import { Facility } from '../../../../../../../types/types';
import './_map-card.scss';

interface MapFacilityCard extends Facility {
  onClick: (facility: Facility) => void;
}

const MapFacilityCard = ({ onClick, ...facility }: MapFacilityCard) => {

  const photo = usePhotoLoader(facility.id);

  const handleClick = () => {
    onClick({ ...facility });
  };

  return (
    <Link to='/facility' onClick={handleClick} className='map-facility-card'>
      <div className="map-facility-card-photo" >
        {photo && <img src={photo} alt="map facility card photo" />}
      </div>
      <div className="map-facility-card-info">
        <div className="map-facility-card-name">{facility.name}</div>
        <div className="map-facility-card-address">{facility.address}, {facility.postalCode}</div>
        <div className="map-facility-card-type">{facility.facilityType.name.toUpperCase()}</div>
      </div>
    </Link>
  )
};

export default MapFacilityCard;
