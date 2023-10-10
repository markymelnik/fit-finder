import { Link } from 'react-router-dom';
import './_search-slider-card.scss';

const SearchSliderCard = () => {
  return (
    <div className="search-slider-card-container">
      <div className="search-slider-card-message">Discover More</div>
      <Link to='/search' className='search-slider-card-search-btn'>
        Search Now
      </Link>
  </div>
  )
  
}

export default SearchSliderCard;