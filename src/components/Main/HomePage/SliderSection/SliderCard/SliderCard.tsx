import { Link } from 'react-router-dom';

import usePhotoLoader from '../../../../../hooks/usePhotoLoader';
import { Facility } from '../../../../../types/types';
import './_slider-card.scss';

interface SliderCard extends Facility {
  onClick: (facility: Facility) => void;
}

const SliderCard = ({ onClick, ...facility }: SliderCard) => {

  const photo = usePhotoLoader(facility.id);

  const handleSliderCardClick = () => {
    onClick({ ...facility });
  }

  return (
    <div className="slider-card-container" onClick={handleSliderCardClick}>
      <Link to='/facility' className="slider-card-link-wrapper">
        <div className="slider-card-photo-container">
          {photo && <img src={photo} alt="facility main photo" />}
        </div>
        <div className="slider-card-bottom">
          <div className="slider-card-type">{facility.facilityType.name.toUpperCase()}</div>
          <div className="slider-card-name">{facility.name}</div>
          <div className="slider-card-borough">{facility.neighborhood.borough.name}</div>
        </div>
      </Link>
    </div>
  )
}

export default SliderCard;