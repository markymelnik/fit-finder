import './_explore-section.scss';

const ExploreSection = () => {
  return (
    <div className='explore-section-container'>
      <div className="explore-section-title">Explore Categories</div>
      <div className="explore-category-container">
        <div className="explore-category">
          <div className="category-text">Traditional Gym</div>
        </div>
        <div className="explore-category">
          <div className="category-text">Martial Arts Studio</div>
        </div>
        <div className="explore-category">
          <div className="category-text">Outdoor Workout Area</div>
        </div>
        <div className="explore-category">
          <div className="category-text">Yoga Studio</div>
        </div>
        <div className="explore-category">
          <div className="category-text">Climbing Gym</div>
        </div>
        <div className="explore-category">
          <div className="category-text">Pilates Studio</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
