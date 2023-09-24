import ExploreCategory from "./ExploreCategory/ExploreCategory";
import "./_explore-section.scss";

const ExploreSection = () => {
  return (
    <div className="explore-section-container">
      <div className="explore-section-title">Explore Categories</div>
      <div className="explore-category-container">
        <ExploreCategory innerText="Traditional Gym"/>
        <ExploreCategory innerText="Martial Arts Studio"/>
        <ExploreCategory innerText="Outdoor Workout Area"/>
        <ExploreCategory innerText="Yoga Studio"/>
        <ExploreCategory innerText="Climbing Gym"/>
        <ExploreCategory innerText="Pilates Studio"/>
      </div>
    </div>
  );
};

export default ExploreSection;
