import { useDispatch } from "react-redux";

import { resetLoginError } from "../../../redux/auth/login/loginActions";
import { resetSignupError } from "../../../redux/auth/signup/signupActions";
import { setIsAuthFormShown } from "../../../redux/slices/authFormSlice";
import { setIsSidebarMenuOpen } from "../../../redux/slices/sidebarMenuSlice";
import { AppDispatch } from "../../../redux/store";
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
    dispatch(resetSignupError());
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
