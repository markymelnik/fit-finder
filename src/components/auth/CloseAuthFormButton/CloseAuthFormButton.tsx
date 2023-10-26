import { useDispatch } from 'react-redux';

import XMarkSVG from '../../../assets/svg/XMarkSVG';
import { resetLoginError } from '../../../redux/auth/login/loginActions';
import { resetSignupError } from '../../../redux/auth/signup/signupActions';
import { setIsAuthFormShown } from '../../../redux/slices/authFormSlice';
import './_close-auth-form-btn.scss';

const CloseAuthFormButton = () => {

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setIsAuthFormShown(false));
    dispatch(resetLoginError());
    dispatch(resetSignupError());
  }

  return (
    <button className="close-auth-form-btn" onClick={handleButtonClick}>
      <XMarkSVG />
    </button>
  )
}

export default CloseAuthFormButton;
