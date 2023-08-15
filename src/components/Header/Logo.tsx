import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEnteredKeyword } from '../../redux/slices/enteredKeywordSlice';
import { AppDispatch } from '../../redux/store';

const Logo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogoClick = () => {
    dispatch(setEnteredKeyword(''));
  };

  return (
    <div className='logo-container'>
      <Link to='/' onClick={handleLogoClick} className='logo-text'>
        FF
      </Link>
    </div>
  );
};

export default Logo;
