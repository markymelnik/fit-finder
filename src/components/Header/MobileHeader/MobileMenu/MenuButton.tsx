import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { setIsMobileMenuOpen } from "../../../../redux/slices/mobileMenuSlice";
import { useSelector } from "react-redux";
import MobileMenuOpenIcon from '../../../../assets/imgs/mobile-menu-open-icon.png';
import MobileMenuCloseIcon from '../../../../assets/imgs/mobile-menu-close-icon.png';

const MenuButton = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);

  const handleButtonClick = () => {
    dispatch(setIsMobileMenuOpen(!isMobileMenuOpen));
  }

  return (
    <button
      type='button'
      onClick={handleButtonClick}
      style={
        isMobileMenuOpen
          ? { backgroundImage: `url(${MobileMenuCloseIcon})` }
          : { backgroundImage: `url(${MobileMenuOpenIcon})` }
      }
      className='mobile-menu-btn'
    ></button>
  );
};

export default MenuButton;
