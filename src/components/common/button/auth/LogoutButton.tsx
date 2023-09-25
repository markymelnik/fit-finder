import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logoutAccount } from '../../../../redux/auth/authRequests';
import { setIsAccountMenuOpen } from '../../../../redux/slices/accountMenuSlice';
import { setIsSidebarMenuOpen } from '../../../../redux/slices/sidebarMenuSlice';
import { AppDispatch } from '../../../../redux/store';

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