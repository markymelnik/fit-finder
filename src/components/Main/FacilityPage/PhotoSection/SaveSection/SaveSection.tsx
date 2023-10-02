import { useSelector } from 'react-redux';

import { RootState } from '../../../../../redux/store';
import AddFavoriteButton from '../../../../common/button/favorite/AddFavoriteButton';
import EncourageLoginButton from '../../../../common/button/favorite/EncourageLoginButton';
import './_save-section.scss';

const SaveSection = () => {
  
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const userAccount = useSelector((state: RootState) => state.login.userAccount);
  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.selectedFacility);

  return (
    <div className="save-section-container">
      {/* <div className="save-section-text">
        Save
      </div> */}
      {isLoggedIn && userAccount && selectedFacility ? (
        <AddFavoriteButton userAccountId={userAccount.id} facilityId={selectedFacility.id} customClass='facility-add-favorite-btn'/>
      ) : (
        <EncourageLoginButton customClass='encourage-login-btn' />
      )}
    </div>
  )
}

export default SaveSection;