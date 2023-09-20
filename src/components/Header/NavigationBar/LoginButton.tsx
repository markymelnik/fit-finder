import { useDispatch } from "react-redux";
import { setIsLoginFormShown } from "../../../redux/slices/loginFormSlice";
import { AppDispatch } from "../../../redux/store";
import { setIsMobileMenuOpen } from "../../../redux/slices/mobileMenuSlice";

const LoginButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsLoginFormShown(true));
    dispatch(setIsMobileMenuOpen(false));
  }

  return (
    <button className='login-link' onClick={handleButtonClick}>Log In</button>    
  );
};

export default LoginButton;
