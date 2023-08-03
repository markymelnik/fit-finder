import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from '../../redux/searchTermSlice';

const Logo = () => {
  const dispath = useDispatch();

  const handleLogoClick = () => {
    dispath(setSearchTerm(''));
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
