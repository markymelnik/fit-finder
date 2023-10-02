import { useDispatch } from 'react-redux';

import EncourageSVG from './EncourageSVG';
import './_add-favorite-btn.scss';
import { setIsAuthFormShown } from '../../../../redux/slices/authFormSlice';
import { AppDispatch } from '../../../../redux/store';

type EncourageLoginButtonProps = {
  customClass: string;
}

const EncourageLoginButton = ({ customClass }: EncourageLoginButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsAuthFormShown(true));
  }

  return (
    <div className={customClass} onClick={handleButtonClick}>
      <EncourageSVG />
    </div>
  )
}

export default EncourageLoginButton;
