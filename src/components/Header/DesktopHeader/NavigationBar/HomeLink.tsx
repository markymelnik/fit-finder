import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setIsSidebarMenuOpen } from "../../../../redux/slices/sidebarMenuSlice";
import { AppDispatch } from "../../../../redux/store";

type HomeLinkProps = {
  customClass: string;
}

const HomeLink = ({ customClass }: HomeLinkProps) => {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleHomeButtonClick = () => {
    navigate('/');
    dispatch(setIsSidebarMenuOpen(false));
  }
  return (
    <div className={customClass} onClick={handleHomeButtonClick}>Home</div>
  )
}

export default HomeLink;