import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import './_details-tab.scss';
import { useEffect } from 'react';

const DetailsTab = () => {
  
  const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
  const userAccountDetails = useSelector((state: RootState) => state.authentication.userAccount);

  return (
    <div className='account-details-container'>
      <div className='account-details-header'>My Details</div>
      {isLoggedIn && userAccountDetails ? (
        <div className='account-details-body'>
          <div className='account-details-section'>
            <div className='account-details-title'>EMAIL</div>
            <div className='account-name'>{userAccountDetails?.username}</div>
          </div>
          <div className='account-details-section'>
            <div className='account-details-title'>ID NUMBER</div>
            <div className='account-id'>{userAccountDetails?.id}</div>
          </div>
        </div>
      ) : (
        <>
          <p className='not-logged-in'>You are not logged in!</p>
        </>
      )}
    </div>
  );
};

export default DetailsTab;
