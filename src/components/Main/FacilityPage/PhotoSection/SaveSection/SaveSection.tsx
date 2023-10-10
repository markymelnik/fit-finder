import { useSelector } from 'react-redux';

import { RootState } from '../../../../../redux/store';
import AddFavoriteButton from '../../../../common/button/favorite/AddFavorite/AddFavoriteButton';
import EncourageLoginButton from '../../../../common/button/favorite/EncourageLogin/EncourageLoginButton';

const SaveSection = () => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const userAccount = useSelector(
    (state: RootState) => state.login.userAccount
  );
  const selectedFacility = useSelector(
    (state: RootState) => state.selectedFacility.selectedFacility
  );

  return (
    <>
      {isLoggedIn && userAccount && selectedFacility ? 
      (
        <AddFavoriteButton
          userAccountId={userAccount.id}
          facilityId={selectedFacility.id}
          customClass="save-section-add-favorite-btn"
        />
      ) : (
        <EncourageLoginButton customClass="save-section-encourage-login-btn" />
      )}
    </>
  );
};

export default SaveSection;