import { useNavigate } from 'react-router-dom';

import LongArrowLeftSVG from '../../../../assets/svg/arrows/LongArrowLeftSVG';
import './_back-btn.scss';

const BackButton = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className="back-btn-container">
      <div className='btn-wrapper' onClick={handleButtonClick}>
          <LongArrowLeftSVG />
        <button className='back-btn'>Back</button>
      </div>
    </div>
  );
};

export default BackButton;
