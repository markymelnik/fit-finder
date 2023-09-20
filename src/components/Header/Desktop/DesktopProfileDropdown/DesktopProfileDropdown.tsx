import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { useSelector } from 'react-redux';
import { setIsDesktopProfileDropdownOpen } from '../../../../redux/slices/desktopProfileDropdownSlice';
import './_desktop-profile-dropdown.scss';
import AccountLink from '../../NavigationBar/AccountLink';
import LogoutButton from '../../Mobile/MobileMenu/LogoutButton/LogoutButton';
import ProfileIcon from '../../../../assets/icons/account/details-icon.png';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import { useRef } from 'react';

const DesktopProfileDropdown = () => {

  const dispatch = useDispatch<AppDispatch>();
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
    <div className="desktop-profile-dropdown-container" ref={dropdownRef}>
      <button className={`dropdown-btn ${isDesktopProfileDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        <img src={ProfileIcon}/>
      </button>
      <div className={`profile-dropdown ${isDesktopProfileDropdownOpen ? 'active' : ''}`}>
        <AccountLink customClass='account-link'/>
        <LogoutButton customClass='logout-btn'/>
      </div>
    </div>
  )
}

export default DesktopProfileDropdown;