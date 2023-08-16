import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEnteredKeyword } from '../../redux/slices/filterSlice';
import { AppDispatch } from '../../redux/store';

const Logo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogoClick = () => {
    dispatch(setEnteredKeyword(''));
  };

  return (
    <Link to='/' onClick={handleLogoClick} className='logo-container'>
      <div className="logo-text">
        FF
      </div>
    </Link>
  );
};

export default Logo;
