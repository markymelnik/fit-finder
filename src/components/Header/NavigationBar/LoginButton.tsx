import { useDispatch } from "react-redux";
import { setActiveTab, setIsLoginFormShown } from "../../../redux/slices/loginFormSlice";
import { AppDispatch } from "../../../redux/store";
import { setIsMobileMenuOpen } from "../../../redux/slices/mobileMenuSlice";
import { setIsSuccessfulSignupShown } from "../../../redux/slices/successfulSignup";

type LoginButtonProps = {
  customClass: string;
}

const LoginButton = ({ customClass }: LoginButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsSuccessfulSignupShown(false));
    dispatch(setIsLoginFormShown(true));
    dispatch(setActiveTab('login'));
    dispatch(setIsMobileMenuOpen(false));
  }

  return (
    <button className={customClass} onClick={handleButtonClick}>Login</button>    
  );
};

export default LoginButton;
