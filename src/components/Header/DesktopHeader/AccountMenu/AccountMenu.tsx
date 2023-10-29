import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import AccountLink from './AccountLink';
import MenuDivider from './AccountMenuDivider/AccountMenuDivider';
import UserSVG from '../../../../assets/svg/account/UserSVG';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import { setIsAccountMenuOpen } from '../../../../redux/slices/accountMenuSlice';
import { AppDispatch, RootState } from '../../../../redux/store';
import AccountPhoto from '../../../common/AccountPhoto';
import LoginButton from '../../../common/button/auth/LoginButton';
import LogoutButton from '../../../common/button/auth/LogoutButton';
import SignupButton from '../../../common/button/auth/SignupButton';
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
        {isLoggedIn 
          ? <AccountPhoto customClass='account-menu-photo' />
          : <div className={`account-menu-loggedout-icon ${isDesktopProfileDropdownOpen ? 'active' : ''}`} >
              <UserSVG />
            </div>
        } 
      </button>
      <nav className={`account-menu-dropdown ${isDesktopProfileDropdownOpen ? 'active' : ''}`}>
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
      </nav>
    </div>
  )
}

export default AccountMenu;