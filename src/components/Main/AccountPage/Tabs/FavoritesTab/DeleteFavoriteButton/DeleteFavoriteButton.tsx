import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../redux/store';
import './_delete-favorite-btn.scss';
import { deleteFavoritedFacilityFromState } from '../../../../../../redux/slices/favoritedFacilitySlice';
import { deleteFavoritedFacility } from '../../../../../../redux/apiRequests';

type DeleteFavoriteButtonProps = {
  favoriteFacilityObjectId: number;
};

const DeleteFavoriteButton = ({ favoriteFacilityObjectId }: DeleteFavoriteButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteButtonClick = () => {
    try {
      dispatch(deleteFavoritedFacilityFromState(favoriteFacilityObjectId));
      dispatch(deleteFavoritedFacility(favoriteFacilityObjectId));
      console.log('dispatch delete facility')
    } catch {
      console.error("Error deleting favorite facility")
    }
  }

  return (
    <button 
      className="delete-favorite-btn"
      onClick={handleDeleteButtonClick}
    >
      X
    </button>
  )
}

export default DeleteFavoriteButton;