import './_save-section.scss';
import AddFavoriteButton from '../../../../common/button/favorite/AddFavoriteButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import LoginButton from '../../../../common/button/auth/LoginButton';

const FacilitySaveSection = () => {
  
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const userAccount = useSelector((state: RootState) => state.login.userAccount);
  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  return (
    <div className="facility-save-section-container">
      {isLoggedIn && userAccount && selectedFacility ? (
        <AddFavoriteButton userAccountId={userAccount.id} facilityId={selectedFacility.id} customClass='facility-add-favorite-btn'/>
      ) : (
        <div className="encourage-login-container">
          <div className="encourage-text">Want to save this location?</div>
          <LoginButton customClass='encourage-login-btn'/>
        </div>
      )}
    </div>
  )
}

export default FacilitySaveSection;