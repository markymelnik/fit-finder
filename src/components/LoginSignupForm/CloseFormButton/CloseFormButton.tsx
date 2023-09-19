import { useDispatch } from 'react-redux';
import { setIsLoginFormShown } from '../../../redux/slices/loginFormSlice';
import CloseIcon from '../../../assets/icons/mobile/mobile-menu-close-icon.png';
import './close-form-btn.scss';
import { resetLoginError } from '../../../redux/authentication/authenticationActions';

const CloseFormButton = () => {

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setIsLoginFormShown(false));
    dispatch(resetLoginError());
  }

  return (
    <button className="close-form-btn" onClick={handleButtonClick}>
      <img className="close-icon" src={CloseIcon} />
    </button>
  )
}

export default CloseFormButton;
