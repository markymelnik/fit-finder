import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setIsSidebarMenuOpen } from "../../../redux/slices/sidebarMenuSlice";
import { setIsAuthFormShown } from "../../../redux/slices/authFormSlice";
import { resetLoginError } from "../../../redux/auth/login/loginActions";
import { resetRegisterError } from "../../../redux/auth/register/registerActions";
import './_tinted-overlay.scss';

interface TintedOverlayProps {
  isActive: boolean;
  onCloseOverlay: () => void;
}

const TintedOverlay = ({ isActive, onCloseOverlay }: TintedOverlayProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleOverlayClick = () => {
    dispatch(setIsSidebarMenuOpen(false));
    dispatch(setIsAuthFormShown(false));
    dispatch(resetLoginError());
    dispatch(resetRegisterError());
    onCloseOverlay();
  }
  return (
    <button 
      className={`tinted-overlay ${isActive ? 'active' : ''}`}
      onClick={handleOverlayClick}
    ></button>
  )
};

export default TintedOverlay;
