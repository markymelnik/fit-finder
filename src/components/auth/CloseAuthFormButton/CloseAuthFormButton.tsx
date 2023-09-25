import { useDispatch } from 'react-redux';
import { setIsAuthFormShown } from '../../../redux/slices/authFormSlice';
import CloseIcon from '../../../assets/icons/mobile/mobile-menu-close-icon.png';
import { resetLoginError } from '../../../redux/auth/login/loginActions';
import { resetRegisterError } from '../../../redux/auth/register/registerActions';
import './_close-auth-form-btn.scss';

const CloseAuthFormButton = () => {

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setIsAuthFormShown(false));
    dispatch(resetLoginError());
    dispatch(resetRegisterError());
  }

  return (
    <button className="close-auth-form-btn" onClick={handleButtonClick}>
      <img src={CloseIcon} />
    </button>
  )
}

export default CloseAuthFormButton;
