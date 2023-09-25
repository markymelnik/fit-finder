import { Link } from 'react-router-dom';
import './_card.scss';

const DummyCard = () => {

  return (
    <div className='dummy-card-container'>
      <Link to={`/facility`} className='facility-photo-container'>
        <img src={`/src/assets/images/main/facility_${1}.jpg`} alt="facility main photo" />
      </Link>
      <div className='facility-card-info'>
        <div className='facility-card-name'>{`Owl's Head Park`}</div>
        <div className='facility-card-address'>{'68th St Colonial Rd, 11209'.toUpperCase()}</div>
        <div className='facility-card-type'>{'Outdoor Workout Area'.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default DummyCard;
