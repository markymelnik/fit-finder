import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEnteredKeyword } from '../../redux/enteredKeywordSlice';
import { AppDispatch } from '../../redux/store';

const Logo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogoClick = () => {
    dispatch(setEnteredKeyword(''));
  };

  return (
    <h1 className='logo-container'>
      <Link to='/' onClick={handleLogoClick} className='logo-text'>
        Fitness Finder
      </Link>
    </h1>
  );
};

export default Logo;
