import { useDispatch } from "react-redux";

import OpenButtonSVG from "./OpenButtonSVG";
import { setIsSidebarMenuOpen } from "../../../../../redux/slices/sidebarMenuSlice";
import { AppDispatch } from "../../../../../redux/store";
import './_sidebar-menu-open-btn.scss';

const SidebarMenuOpenButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsSidebarMenuOpen(true));
  }

  return (
    <button onClick={handleButtonClick} className='sidebar-menu-open-btn'>
      <OpenButtonSVG />
    </button>
  );
};

export default SidebarMenuOpenButton;
