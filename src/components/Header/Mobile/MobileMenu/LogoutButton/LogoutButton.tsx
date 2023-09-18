import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/store';
import { setIsMobileMenuOpen } from '../../../../../redux/slices/mobileMenuSlice';
import { logoutAccount } from '../../../../../redux/authentication/authenticationRequests';
import { Link } from 'react-router-dom';

type LogoutButtonProps = {
  customClass: string;
}

const LogoutButton = ({ customClass }: LogoutButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    logoutAccount(dispatch)();
    dispatch(setIsMobileMenuOpen(false));
  }
  return (
    <Link to="/">
      <button className={customClass} onClick={handleLogout}>Logout</button>
    </Link>
    
  )
}

export default LogoutButton;