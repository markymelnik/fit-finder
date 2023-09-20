import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/store';
import { setIsMobileMenuOpen } from '../../../../../redux/slices/mobileMenuSlice';
import { logoutAccount } from '../../../../../redux/authentication/authenticationRequests';
import { Link } from 'react-router-dom';
import { setIsDesktopProfileDropdownOpen } from '../../../../../redux/slices/desktopProfileDropdownSlice';

type LogoutButtonProps = {
  customClass: string;
}

const LogoutButton = ({ customClass }: LogoutButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    logoutAccount(dispatch)();
    dispatch(setIsMobileMenuOpen(false));
    dispatch(setIsDesktopProfileDropdownOpen(false));
  }
  return (
    <Link to="/" className={customClass} onClick={handleLogout}>Log Out</Link>
  )
}

export default LogoutButton;