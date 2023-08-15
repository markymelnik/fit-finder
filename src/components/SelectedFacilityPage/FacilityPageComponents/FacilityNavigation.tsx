import { Link } from 'react-router-dom';

const FacilityNavigation = () => {
  return (
    <div className='facility-navigation-btns'>
      <Link to='/search'>
        <button className='back-btn'>Back</button>
      </Link>
      <Link to='/'>
        <button className='home-btn'>Home</button>
      </Link>
    </div>
  );
};

export default FacilityNavigation;
