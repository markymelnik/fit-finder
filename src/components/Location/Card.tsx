import { Link } from 'react-router-dom';

const Card = ({ name, type, address }) => {
  return (
    <div className='card-container'>
      <Link to='/location'>
        <div className='card-photo'>
          <img />
        </div>
      </Link>
      <div className='card-location-info'>
        <div className='card-location-name'>{name}</div>
        <div className='card-location-type'>{type}</div>
        <div className='card-location-address'>{address}</div>
      </div>
    </div>
  );
};

export default Card;
