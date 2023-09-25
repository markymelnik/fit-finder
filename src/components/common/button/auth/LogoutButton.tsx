import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { setIsSidebarMenuOpen } from '../../../../redux/slices/sidebarMenuSlice';
import { logoutAccount } from '../../../../redux/auth/authRequests';
import { setIsAccountMenuOpen } from '../../../../redux/slices/accountMenuSlice';
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
        dispatch(setIsSidebarMenuOpen(false));
        dispatch(setIsAccountMenuOpen(false));
      })
    
  }

  return (
    <button className={customClass} onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton;