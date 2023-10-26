import { useDispatch } from "react-redux";

import XMarkSVG from "../../../../../assets/svg/XMarkSVG";
import { setIsSidebarMenuOpen } from "../../../../../redux/slices/sidebarMenuSlice";
import { AppDispatch } from "../../../../../redux/store";
import './_sidebar-menu-close-btn.scss';

const SidebarMenuCloseButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsSidebarMenuOpen(false));
  }

  return (
    <button onClick={handleButtonClick} className='sidebar-menu-close-btn'>
      <XMarkSVG />
    </button>
  );
};

export default SidebarMenuCloseButton;