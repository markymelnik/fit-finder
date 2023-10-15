import { Link } from 'react-router-dom';
import './_to-search-btn.scss';

const ToSearchButton = () => {
  return (
    <div className="to-search-btn-container">
      <Link to='/search' className="to-search-link-wrapper">
        <button className="to-search-btn">Search</button>
      </Link>
    </div>
  )
}

export default ToSearchButton;
