import { Link } from 'react-router-dom';

import './_logo.scss';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/" className="logo-text">
        fitfinder
      </Link>
    </div>
  );
};

export default Logo;
