import { useDispatch } from "react-redux";
import { setActiveTab, setIsLoginFormShown } from "../../../redux/slices/loginFormSlice";
import { AppDispatch } from "../../../redux/store";
import { setIsMobileMenuOpen } from "../../../redux/slices/mobileMenuSlice";

type SignupButtonProps = {
  customClass: string;
}

const SignupButton = ({ customClass }: SignupButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsLoginFormShown(true));
    dispatch(setActiveTab('signup'));
    dispatch(setIsMobileMenuOpen(false));
  }

  return (
    <button className={customClass} onClick={handleButtonClick}>Sign Up</button>    
  );
};

export default SignupButton;