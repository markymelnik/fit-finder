import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <h1 className='logo-container'>
      <Link to='/' className="logo-text">Fitness Finder</Link>
    </h1>
  );
};

export default Logo;
