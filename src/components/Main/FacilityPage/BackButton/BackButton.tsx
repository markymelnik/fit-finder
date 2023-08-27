import { Link } from 'react-router-dom';
import BackIcon from '../../../../assets/icons/arrows/left-arrow.png';
import './_back-btn.scss';

const BackButton = () => {
  return (
    <div className="facility-navigation-btns">
      <Link to='/search' className='back-to-search-container'>
        <div className="back-btn-icon"style={{ backgroundImage: `url(${BackIcon})`}}></div>
        <button className='back-btn'>Back</button>
      </Link>
      {/* <Link to='/'>
        <button className='home-btn'>Home</button>
      </Link> */}
    </div>
  );
};

export default BackButton;
