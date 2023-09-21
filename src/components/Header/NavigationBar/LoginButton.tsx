import { useDispatch } from "react-redux";
import { setIsLoginFormShown } from "../../../redux/slices/loginFormSlice";
import { AppDispatch } from "../../../redux/store";
import { setIsMobileMenuOpen } from "../../../redux/slices/mobileMenuSlice";

type LoginButtonProps = {
  customClass: string;
}

const LoginButton = ({ customClass }: LoginButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsLoginFormShown(true));
    dispatch(setIsMobileMenuOpen(false));
  }

  return (
    <button className={customClass} onClick={handleButtonClick}>Login</button>    
  );
};

export default LoginButton;