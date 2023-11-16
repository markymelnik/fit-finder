import { useDispatch } from "react-redux";

import SidebarMenuSVG from "../../../../../assets/svg/mobile/SidebarMenuSVG";
import { setIsSidebarMenuOpen } from "../../../../../redux/slices/sidebarMenuSlice";
import { AppDispatch } from "../../../../../redux/store";
import './_sidebar-menu-open-btn.scss';

const SidebarMenuOpenButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsSidebarMenuOpen(true));
  }

  return (
    <button onClick={handleButtonClick} className='sidebar-menu-open-btn' aria-label="Open Sidebar Menu">
      <SidebarMenuSVG />
    </button>
  );
};

export default SidebarMenuOpenButton;
