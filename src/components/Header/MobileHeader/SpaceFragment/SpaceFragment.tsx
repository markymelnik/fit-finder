import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ProfileLogo from '../../../../assets/icons/account/details-icon.svg';
import { setIsAuthFormShown } from '../../../../redux/slices/authFormSlice';
import { AppDispatch, RootState } from '../../../../redux/store';
import AccountPhoto from '../../../common/AccountPhoto';
import './_space-fragment.scss';

const SpaceFragment = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  const handleNotLoggedInClick = () => {
    dispatch(setIsAuthFormShown(true));
  }

  const handleLoggedInClick = () => {
    navigate('/account');
  }

  return (
    <>
      {isLoggedIn 
        ? <div className='space-fragment' onClick={handleLoggedInClick}>
            <AccountPhoto customClass='mobile-header-account-photo'/>
          </div> 
        : <div className='space-fragment' onClick={handleNotLoggedInClick}>
            <img src={ProfileLogo}/>
          </div> 
      }
    </>
  )
};

export default SpaceFragment;
