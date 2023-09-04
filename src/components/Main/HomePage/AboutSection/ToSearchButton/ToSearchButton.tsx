import './_to-search-btn.scss';
import { Link } from 'react-router-dom';
import RightArrowIcon from '../../../../../assets/icons/arrows/right-arrow.png';

const ToSearchButton = () => {
  return (
    <div className="to-search-button-container">
      <Link to='/search' className="btn-wrapper">
        <button className="to-search-btn">Search Now</button>
        <div className="right-arrow-icon" style={{ backgroundImage: `url(${RightArrowIcon})`}}></div>
      </Link>
    </div>
  )
}

export default ToSearchButton;
