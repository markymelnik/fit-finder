import { Link } from 'react-router-dom';

const Logo = () => {

  return (
    <Link to='/' className='logo-container'>
      <div className="logo-text">
        FF
      </div>
    </Link>
  );
};

export default Logo;
