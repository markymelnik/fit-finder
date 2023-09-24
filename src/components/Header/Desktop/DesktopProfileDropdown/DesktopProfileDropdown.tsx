import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { useSelector } from 'react-redux';
import { setIsDesktopProfileDropdownOpen } from '../../../../redux/slices/desktopProfileDropdownSlice';
import './_desktop-profile-dropdown.scss';
import AccountLink from '../NavigationBar/AccountLink';
import LogoutButton from '../../../common/button/auth/LogoutButton';
import ProfileIcon from '../../../../assets/icons/account/details-icon.svg';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import MenuIcon from '../../../../assets/icons/mobile/mobile-menu-open-icon.png';
import { useRef } from 'react';
import LoginButton from '../../../common/button/auth/LoginButton';
import DropdownDivider from './DropdownDivider/DropdownDivider';
import SignupButton from '../../../common/button/auth/SignupButton';
import AccountPhoto from '../../../common/AccountPhoto';

const DesktopProfileDropdown = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const isDesktopProfileDropdownOpen = useSelector((state: RootState) => state.isDesktopProfileDropdownOpen.isDesktopProfileDropdownOpen);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    if (isDesktopProfileDropdownOpen) {
      dispatch(setIsDesktopProfileDropdownOpen(false));
    }
  }

  useOutsideClick(dropdownRef, closeDropdown);

  const toggleDropdown = () => {
    dispatch(setIsDesktopProfileDropdownOpen(!isDesktopProfileDropdownOpen));
  }

  return (
    <div className={`desktop-profile-dropdown-container ${isDesktopProfileDropdownOpen ? 'active': ''}`} ref={dropdownRef} onClick={toggleDropdown}>
      <div className="dropdown-content">
        <div className="dropdown-icon">
          <img src={MenuIcon} />
        </div>
        {isLoggedIn 
          ? <AccountPhoto customClass='account-photo' />
          : <button className={`dropdown-btn ${isDesktopProfileDropdownOpen ? 'active' : ''}`} >
              <img src={ProfileIcon} />
            </button>
        } 
      </div>
      <div className={`profile-dropdown ${isDesktopProfileDropdownOpen ? 'active' : ''}`}>
        {isLoggedIn ? (
          <>
            <AccountLink customClass='dropdown-account-link'/>
            <DropdownDivider />
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

export default DesktopProfileDropdown;