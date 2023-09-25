import { useDispatch } from 'react-redux';
import { setIsAuthFormShown } from '../../../redux/slices/authFormSlice';
import CloseIcon from '../../../assets/icons/mobile/mobile-menu-close-icon.png';
import { resetLoginError } from '../../../redux/auth/login/loginActions';
import { resetSignupError } from '../../../redux/auth/signup/signupActions';
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
      <img src={CloseIcon} />
    </button>
  )
}

export default CloseAuthFormButton;
