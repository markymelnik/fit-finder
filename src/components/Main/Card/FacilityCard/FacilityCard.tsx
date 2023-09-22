import { Link } from 'react-router-dom';
import { Facility } from '../../../../types/types';
import usePhotoLoader from '../../../../hooks/usePhotoLoader';
import './_facility-card.scss';
import AddFavoriteButton from '../../AccountPage/Tabs/FavoritesTab/AddFavoriteButton/AddFavoriteButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useEffect } from 'react';

interface FacilityCard extends Facility {
  onClick: (facility: Facility) => void;
}

const FacilityCard = ({ onClick, ...facility }: FacilityCard) => {

  const userAccount = useSelector((state: RootState) => state.login.userAccount);

  const photo = usePhotoLoader(facility.id);

  const handleClick = () => {
    onClick({ ...facility });
  };
  
  return (
    <div className='facility-card-container' onClick={handleClick}>
    <Link to={`/facility`} className="facility-card-link-wrapper">
      <div className='facility-photo-container' >
        {photo && <img src={photo} alt="facility main photo" />}
      </div>
      <div className="facility-card-bottom">
        <div className='facility-card-info'>
          <div className='facility-card-name'>{facility.name}</div>
          <div className='facility-card-address'>{facility.address}, {facility.postalCode}</div>
          <div className='facility-card-type'>{facility.facilityType.name.toUpperCase()}</div>
        </div>
      </div>
      </Link>
      {userAccount && 
        <AddFavoriteButton userAccountId={userAccount.id} facilityId={facility.id} customClass='add-favorite-btn'/>
      }
    </div>
  );
};

export default FacilityCard;
