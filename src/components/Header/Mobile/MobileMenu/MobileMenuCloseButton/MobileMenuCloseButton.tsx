import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { setIsMobileMenuOpen } from "../../../../../redux/slices/mobileMenuSlice";
import MobileMenuCloseIcon from '../../../../../assets/icons/mobile/mobile-menu-close-icon.png';
import './_mobile-menu-close-btn.scss';

const MobileMenuCloseButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsMobileMenuOpen(false));
  }

  return (
    <button
      type='button'
      onClick={handleButtonClick}
      style={{ backgroundImage: `url(${MobileMenuCloseIcon})` }}
      className='mobile-menu-close-btn'
    ></button>
  );
};

export default MobileMenuCloseButton;