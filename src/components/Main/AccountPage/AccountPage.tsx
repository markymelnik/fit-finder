import './_account-page.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import './_account-page.scss';

const AccountPage = () => {

  const userAccountDetails = useSelector((state: RootState) => state.authentication.details);
  const isLoggedIn = useSelector((state: RootState) => state.authentication.details);

  return (
    <div className="account-page-container">
      <div className="account-page-header">Account</div>
      <div className="account-information-container">
        <div className="account-details-container">
          {isLoggedIn ? (
            <>
              <div className="account-name">{userAccountDetails.username}</div>
              <div className="account-id">User ID: {userAccountDetails.userId}</div>
            </>
          ) : (
            <>
              <p>You are not logged in!</p>
            </>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default AccountPage;