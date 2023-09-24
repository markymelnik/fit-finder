import './_add-favorite-btn.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { addFavoritedFacility, deleteFavoritedFacility, fetchFavoritedFacilities } from '../../../../redux/apiRequests';
import FavoriteSVG from './FavoriteSVG';
import { useSelector } from 'react-redux';
import { favoritedFacilityIdSelector } from '../../../../redux/selectors/favoriteFacilityIdSelector';
import { deleteFavoritedFacilityFromState } from '../../../../redux/slices/favoritedFacilitySlice';

type AddFavoriteButtonProps = {
  userAccountId: string,
  facilityId: number,
  customClass: string,
}

const AddFavoriteButton = ({ userAccountId, facilityId, customClass}: AddFavoriteButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const favoritedFacilityIds = useSelector(favoritedFacilityIdSelector);
  const isFavorited = favoritedFacilityIds.includes(facilityId);

  const favoritedFacilityObjects = useSelector((state: RootState) => state.favoritedFacility);

  const handleAddFavoriteClick = async (event: any) => {
    event.stopPropagation();

    let passedFacilityObjId: number = 0;
    for (let facilityObject of favoritedFacilityObjects) {
      if (facilityObject.facility.id === facilityId) {
        passedFacilityObjId = facilityObject.id;
        break;
      }
    }

    if (isFavorited) {
      try {
        await dispatch(deleteFavoritedFacility(passedFacilityObjId));
        dispatch(deleteFavoritedFacilityFromState(passedFacilityObjId));
      } catch (err) {
        console.error("Error deleting favorited facility");
      }
      
    } else {
      try { 
        dispatch(addFavoritedFacility(addFavoriteData));
      } catch (err) {
        console.error("Error adding favorited facility")
      }
        
    }
    
  }

  const addFavoriteData = {
    "userAccountId": userAccountId,
    "facilityId": facilityId
  }

  return (
    <button className={customClass} onClick={handleAddFavoriteClick}>
      <FavoriteSVG isFilled={isFavorited} />
    </button>
  )
}

export default AddFavoriteButton;
