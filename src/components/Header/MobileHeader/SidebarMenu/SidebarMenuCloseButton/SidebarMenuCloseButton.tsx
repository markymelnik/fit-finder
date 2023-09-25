import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { setIsSidebarMenuOpen } from "../../../../../redux/slices/sidebarMenuSlice";
import MobileMenuCloseIcon from '../../../../../assets/icons/mobile/mobile-menu-close-icon.png';
import './_sidebar-menu-close-btn.scss';

const SidebarMenuCloseButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsSidebarMenuOpen(false));
  }

  return (
    <button onClick={handleButtonClick} className='sidebar-menu-close-btn'>
      <img src={MobileMenuCloseIcon} />
    </button>
  );
};

export default SidebarMenuCloseButton;