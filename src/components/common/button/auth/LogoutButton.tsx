import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { setIsMobileMenuOpen } from '../../../../redux/slices/mobileMenuSlice';
import { logoutAccount } from '../../../../redux/authentication/authenticationRequests';
import { setIsDesktopProfileDropdownOpen } from '../../../../redux/slices/desktopProfileDropdownSlice';
import { useNavigate } from 'react-router-dom';

type LogoutButtonProps = {
  customClass: string;
}

const LogoutButton = ({ customClass }: LogoutButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  

  const handleLogout = () => {
    logoutAccount(dispatch)()
      .then(() => {
        navigate("/");
        dispatch(setIsMobileMenuOpen(false));
        setIsDesktopProfileDropdownOpen(false);
      })
    
  }

  return (
    <button className={customClass} onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton;