import { useDispatch } from "react-redux";

import { setActiveAuthTab, setIsAuthFormShown } from "../../../../redux/slices/authFormSlice";
import { setIsSidebarMenuOpen } from "../../../../redux/slices/sidebarMenuSlice";
import { setIsSuccessfulSignupShown } from "../../../../redux/slices/successfulSignup";
import { AppDispatch } from "../../../../redux/store";

type LoginButtonProps = {
  customClass: string;
}

const LoginButton = ({ customClass }: LoginButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsSuccessfulSignupShown(false));
    dispatch(setIsAuthFormShown(true));
    dispatch(setActiveAuthTab('login'));
    dispatch(setIsSidebarMenuOpen(false));
  }

  return (
    <button className={customClass} onClick={handleButtonClick}>Login</button>    
  );
};

export default LoginButton;
