import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { setIsMobileMenuOpen } from "../../../../redux/slices/mobileMenuSlice";
import MobileMenuOpenIcon from '../../../../assets/icons/mobile/mobile-menu-open-icon.png';
import './_mobile-menu-btn.scss';

const MobileMenuOpenButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsMobileMenuOpen(true));
  }

  return (
    <button
      type='button'
      onClick={handleButtonClick}
      style={{ backgroundImage: `url(${MobileMenuOpenIcon})` }}
      className='mobile-menu-open-btn'
    ></button>
  );
};

export default MobileMenuOpenButton;
