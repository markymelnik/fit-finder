import { Link } from 'react-router-dom';
import BackIcon from '../../../../assets/icons/arrows/left-arrow.png';
import './_back-btn.scss';

const BackButton = () => {
  return (
    <div className="back-btn-container">
      <Link to='/search' className='btn-wrapper'>
          <div className="back-btn-icon"style={{ backgroundImage: `url(${BackIcon})`}}></div>
        <button className='back-btn'>Back</button>
      </Link>
    </div>
  );
};

export default BackButton;
