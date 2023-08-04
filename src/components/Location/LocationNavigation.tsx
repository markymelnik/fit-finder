import { Link } from 'react-router-dom';

const LocationNavigation = () => {
  return (
    <div className='location-navigation-btns'>
      <Link to='/search'>
        <button className='back-btn'>Back</button>
      </Link>
      <Link to='/'>
        <button className='home-btn'>Home</button>
      </Link>
    </div>
  );
};

export default LocationNavigation;
