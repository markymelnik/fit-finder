import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { setIsLoginFormShown } from '../../../../redux/slices/loginFormSlice';
import ProfileLogo from '../../../../assets/icons/account/details-icon.svg';
import './_space-fragment.scss';
import { useSelector } from 'react-redux';
import AccountPhoto from '../../Desktop/DesktopProfileDropdown/DropdownDivider/AccountPhoto/AccountPhoto';
import { useNavigate } from 'react-router-dom';

const SpaceFragment = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  const handleNotLoggedInClick = () => {
    dispatch(setIsLoginFormShown(true));
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
