import { useDispatch } from "react-redux";

import { setActiveAuthTab, setIsAuthFormShown } from "../../../../redux/slices/authFormSlice";
import { setIsSidebarMenuOpen } from "../../../../redux/slices/sidebarMenuSlice";
import { AppDispatch } from "../../../../redux/store";

type SignupButtonProps = {
  customClass: string;
}

const SignupButton = ({ customClass }: SignupButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsAuthFormShown(true));
    dispatch(setActiveAuthTab('signup'));
    dispatch(setIsSidebarMenuOpen(false));
  }

  return (
    <button className={customClass} onClick={handleButtonClick}>Sign Up</button>    
  );
};

export default SignupButton;