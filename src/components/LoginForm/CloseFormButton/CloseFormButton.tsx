import { useDispatch } from 'react-redux';
import { setIsLoginFormShown } from '../../../redux/slices/loginFormSlice';
import CloseIcon from '../../../assets/icons/mobile/mobile-menu-close-icon.png';
import './close-form-btn.scss';

const CloseFormButton = () => {

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setIsLoginFormShown(false));
  }

  return (
    <button className="close-form-btn" onClick={handleButtonClick}>
      <img className="close-icon" src={CloseIcon} />
    </button>
  )
}

export default CloseFormButton;
