import { Link } from 'react-router-dom';
import './_no-favorites-message.scss';

const NoFavoritesMessage = () => {
  return (
    <div className="no-favorites-message-container">
      <div className="message-text">Your favorites list is empty!</div>
      <Link to='/search' className='to-search-btn'>
        Search Now
      </Link>
    </div>
  )
}

export default NoFavoritesMessage;