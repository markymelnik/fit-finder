import { Link } from 'react-router-dom';
import './_logo.scss';

const Logo = () => {

  return (
    <Link to='/' className='logo-container'>
      <div className="logo-text">
        fitfinder
      </div>
    </Link>
  );
};

export default Logo;
