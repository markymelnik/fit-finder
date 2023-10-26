import { useDispatch } from "react-redux";

import EncourageLoginSVG from "../../../../../assets/svg/favorite/EncourageLoginSVG";
import { setIsAuthFormShown } from "../../../../../redux/slices/authFormSlice";
import { AppDispatch } from "../../../../../redux/store";
import './_encourage-login-btn.scss';

type EncourageLoginButtonProps = {
  customClass: string;
};

const EncourageLoginButton = ({ customClass }: EncourageLoginButtonProps) => {
  
  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsAuthFormShown(true));
  };

  return (
    <div className={customClass} onClick={handleButtonClick}>
      <EncourageLoginSVG />
    </div>
  );
};

export default EncourageLoginButton;
