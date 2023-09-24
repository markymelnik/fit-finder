import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { setIsMobileMenuOpen } from "../../../../../redux/slices/mobileMenuSlice";
import MobileMenuOpenIcon from '../../../../../assets/icons/mobile/mobile-menu-open-icon.png'
import './_mobile-menu-open-btn.scss';

const MobileMenuOpenButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsMobileMenuOpen(true));
  }

  return (
    <button onClick={handleButtonClick} className='mobile-menu-open-btn'>
      <img src={MobileMenuOpenIcon} />
    </button>
  );
};

export default MobileMenuOpenButton;
