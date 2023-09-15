import './_add-favorite-btn.scss';
import AddFavoriteIcon from '../../../../../../assets/icons/account/favorites-icon.png';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../redux/store';
import { addFavoritedFacility } from '../../../../../../redux/apiRequests';

type AddFavoriteButtonProps = {
  userAccountId: string,
  facilityId: number,
  customClass: string,
}

const AddFavoriteButton = ({ userAccountId, facilityId, customClass}: AddFavoriteButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleAddFavoriteClick = (event: any) => {
    event.stopPropagation();
    dispatch(addFavoritedFacility(addFavoriteData))
  }

  const addFavoriteData = {
    "userAccountId": userAccountId,
    "facilityId": facilityId
  }

  return (
    <button className={customClass} onClick={handleAddFavoriteClick}>
      <img src={AddFavoriteIcon} />
    </button>
  )
}

export default AddFavoriteButton;
