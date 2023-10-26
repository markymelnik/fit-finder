import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import UserSVG from '../../../../assets/svg/account/UserSVG';
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
            <UserSVG />
          </div> 
      }
    </>
  )
};

export default SpaceFragment;
