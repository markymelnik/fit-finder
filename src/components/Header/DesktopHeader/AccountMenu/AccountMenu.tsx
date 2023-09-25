import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { useSelector } from 'react-redux';
import { setIsAccountMenuOpen } from '../../../../redux/slices/accountMenuSlice';
import AccountLink from './AccountLink';
import LogoutButton from '../../../common/button/auth/LogoutButton';
import ProfileIcon from '../../../../assets/icons/account/details-icon.svg';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import MenuListIcon from '../../../../assets/icons/mobile/mobile-menu-open-icon.png';
import { useRef } from 'react';
import LoginButton from '../../../common/button/auth/LoginButton';
import MenuDivider from './AccountMenuDivider/AccountMenuDivider';
import SignupButton from '../../../common/button/auth/SignupButton';
import AccountPhoto from '../../../common/AccountPhoto';
import './_account-menu.scss';

const AccountMenu = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const isDesktopProfileDropdownOpen = useSelector((state: RootState) => state.accountMenu.isAccountMenuOpen);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    if (isDesktopProfileDropdownOpen) {
      dispatch(setIsAccountMenuOpen(false));
    }
  }

  useOutsideClick(dropdownRef, closeDropdown);

  const toggleDropdown = () => {
    dispatch(setIsAccountMenuOpen(!isDesktopProfileDropdownOpen));
  }

  return (
    <div className={`account-menu-container ${isDesktopProfileDropdownOpen ? 'active': ''}`} ref={dropdownRef} onClick={toggleDropdown}>
      <button className="account-menu-btn">
        <div className="account-menu-list-icon">
          <img src={MenuListIcon} />
        </div>
        {isLoggedIn 
          ? <AccountPhoto customClass='account-menu-photo' />
          : <div className={`account-menu-generic-icon ${isDesktopProfileDropdownOpen ? 'active' : ''}`} >
              <img src={ProfileIcon} />
            </div>
        } 
      </button>
      <div className={`account-menu-dropdown ${isDesktopProfileDropdownOpen ? 'active' : ''}`}>
        {isLoggedIn ? (
          <>
            <AccountLink customClass='dropdown-account-link'/>
            <MenuDivider />
            <LogoutButton customClass='dropdown-logout-btn'/>
          </>
        ) : (
          <>
            <LoginButton customClass='dropdown-login-btn' />
            <SignupButton customClass='dropdown-signup-btn' />
          </>
        )}
      </div>
    </div>
  )
}

export default AccountMenu;