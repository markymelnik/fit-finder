import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { setIsMobileMenuOpen } from "../../../../redux/slices/mobileMenuSlice";
import './_tinted-overlay.scss';
import { setIsLoginFormShown } from "../../../../redux/slices/loginFormSlice";

interface TintedOverlayProps {
  isActive: boolean;
}

const TintedOverlay = ({ isActive }: TintedOverlayProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleOverlayClick = () => {
    dispatch(setIsMobileMenuOpen(false));
    dispatch(setIsLoginFormShown(false));
  }
  return (
    <button 
      className={`tinted-overlay ${isActive ? 'active' : ''}`}
      onClick={handleOverlayClick}
    ></button>
  )
};

export default TintedOverlay;
