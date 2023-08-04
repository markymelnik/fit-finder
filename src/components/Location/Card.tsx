import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className='card-container'>
      <Link to='/location'>
        <div className="card-photo">
          <img />
        </div>
      </Link>
      <div className="card-location-info">
        <div className="card-location-name">Location Name</div>
        <div className="card-location-type">Type</div>
        <div className="card-location-address">Address</div>
      </div>
    </div>
  )
};

export default Card;
