import { Link } from 'react-router-dom';

const Logo = () => {

  const handleLogoClick = () => {
    console.log('Navigate to home')
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
