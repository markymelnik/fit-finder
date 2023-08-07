import { Link } from 'react-router-dom';

interface FacilityData {
  name: String;
  type: String;
  address: String;
}

interface CardProps extends FacilityData {
  onClick: (facility: FacilityData) => void;
}

const Card = ({ name, type, address, onClick }: CardProps) => {

  const handleClick = () => {
    onClick({ name, type, address });
  };
  
  return (
    <div className='card-container'>
      <Link to='/facility'>
        <div className='card-photo' onClick={handleClick}>
          <img />
        </div>
      </Link>
      <div className='card-facility-info'>
        <div className='card-facility-name'>{name}</div>
        <div className='card-facility-type'>{type}</div>
        <div className='card-facility-address'>{address}</div>
      </div>
    </div>
  );
};

export default Card;

Location
