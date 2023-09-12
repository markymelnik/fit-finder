import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import './_account-page.scss';

const AccountPage = () => {

  const userAccountDetails = useSelector((state: RootState) => state.authentication.details);
  const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return (
    <div className='account-page-container'>
      {isMobile && <div className="account-page-top-image"></div>}
      <div className="account-page-header">My Account</div>
      <div className="account-page-body">
        {!isMobile && 
          <div className="account-page-leftbar">
            <div className="my-details-btn">Details</div>
            <div className="my-favorites-btn">Favorites</div>
          </div>
        }
        <div className='account-page-rightbar'>
          <div className="account-page-rightbar-header">My Details</div>
          
          <div className='account-information-container'>
            <div className="account-information-header">Personal Information</div>
            <div className='account-page-divider'>
            <div className='divider'></div>
          </div>
            <div className='account-details-container'>
              {isLoggedIn ? (
                <>
                  <div className="account-details-section">
                    <div className="account-details-title">EMAIL</div>
                    <div className='account-name'>{userAccountDetails.username}</div>
                  </div>
                  <div className="account-details-section">
                    <div className="account-details-title">ID</div>
                    <div className='account-id'>{userAccountDetails.userId}</div>
                  </div>
                </>
              ) : (
                <>
                  <p className='not-logged-in'>You are not logged in!</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AccountPage;