import './_save-section.scss';
import AddFavoriteButton from '../../../AccountPage/Tabs/FavoritesTab/AddFavoriteButton/AddFavoriteButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';

const FacilitySaveSection = () => {
  
  const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
  const userAccount = useSelector((state: RootState) => state.authentication.userAccount);
  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  return (
    <div className="facility-save-section-container">
      {isLoggedIn && userAccount && selectedFacility && (
        <div className="facility-save-container">
        <div className="facility-add-favorite-text">Add to Favorites</div>
        <AddFavoriteButton userAccountId={userAccount.id} facilityId={selectedFacility.id} customClass='facility-add-favorite-btn'/>
      </div>
      )}
    </div>
  )
}

export default FacilitySaveSection;