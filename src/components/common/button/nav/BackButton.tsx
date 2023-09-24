import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../../assets/icons/arrows/left-arrow.png';
import './_back-btn.scss';

const BackButton = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className="back-btn-container">
      <div className='btn-wrapper' onClick={handleButtonClick}>
          <div className="back-btn-icon"style={{ backgroundImage: `url(${BackIcon})`}}></div>
        <button className='back-btn'>Back</button>
      </div>
    </div>
  );
};

export default BackButton;
