import './_explore-section.scss';
import { Link } from 'react-router-dom';

const ExploreSection = () => {
  return (
    <div className='explore-section-container'>
      <div className="explore-section-title">Explore Categories</div>
      <div className="explore-category-container">
        <Link to='/search' className="explore-category">
          <div className="category-text">Traditional Gym</div>
        </Link>
        <Link to='/search' className="explore-category">
          <div className="category-text">Martial Arts Studio</div>
        </Link>
        <Link to='/search' className="explore-category">
          <div className="category-text">Outdoor Workout Area</div>
        </Link>
        <Link to='/search' className="explore-category">
          <div className="category-text">Yoga Studio</div>
        </Link>
        <Link to='/search' className="explore-category">
          <div className="category-text">Climbing Gym</div>
        </Link>
        <Link to='/search' className="explore-category">
          <div className="category-text">Pilates Studio</div>
        </Link>
      </div>
    </div>
  );
};

export default ExploreSection;
