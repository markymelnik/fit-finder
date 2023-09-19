import { useDispatch } from 'react-redux';
import { setIsLoginFormShown } from '../../../redux/slices/loginFormSlice';
import CloseIcon from '../../../assets/icons/mobile/mobile-menu-close-icon.png';
import './close-form-btn.scss';
import { resetLoginError } from '../../../redux/authentication/login/loginActions';
import { resetRegisterError } from '../../../redux/authentication/register/registerActions';

const CloseFormButton = () => {

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setIsLoginFormShown(false));
    dispatch(resetLoginError());
    dispatch(resetRegisterError());
  }

  return (
    <button className="close-form-btn" onClick={handleButtonClick}>
      <img className="close-icon" src={CloseIcon} />
    </button>
  )
}

export default CloseFormButton;
