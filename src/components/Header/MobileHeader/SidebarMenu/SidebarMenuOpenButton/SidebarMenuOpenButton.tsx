import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { setIsSidebarMenuOpen } from "../../../../../redux/slices/sidebarMenuSlice";
import MobileMenuOpenIcon from '../../../../../assets/icons/mobile/mobile-menu-open-icon.png'
import './_sidebar-menu-open-btn.scss';


const SidebarMenuOpenButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsSidebarMenuOpen(true));
  }

  return (
    <button onClick={handleButtonClick} className='sidebar-menu-open-btn'>
      <img src={MobileMenuOpenIcon} />
    </button>
  );
};

export default SidebarMenuOpenButton;
