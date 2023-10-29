import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import ExploreCategory from "./ExploreCategory/ExploreCategory";
import { setSelectedAmenities, setSelectedFacilityTypes, setSelectedOfferings } from "../../../../redux/slices/filterSlice";
import { shuffleArray } from "../../../common/shuffleArray";
import "./_explore-section.scss";

const ExploreSection = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const typeCategory = [
    "Outdoor Workout Area",
    "Traditional Gym",
    "Martial Arts Center",
    "Climbing Gym",
    "Yoga Studio",
    "Pilates Studio",
    "HIIT/CrossFit",
    "Fitness Studio",
    "Recreation Center"
  ];

  const amenityCategory = [
    "Sauna / Steam Room",
    "Swimming Pool"
  ];

  const offeringCategory = [
    "Personal Training",
    "Group Sessions",
  ];

  const handleCategoryClick = (category: string) => {
    const selectedCategory = [category];

    switch(true) {
      case typeCategory.includes(category):
        dispatch(setSelectedFacilityTypes(selectedCategory));
        break;
      case amenityCategory.includes(category):
        dispatch(setSelectedAmenities(selectedCategory));
        break;
      case offeringCategory.includes(category):
        dispatch(setSelectedOfferings(selectedCategory));
        break;
      default:
        break;
    }
    navigate('search');
  }

  const categories = shuffleArray([...typeCategory, ...amenityCategory, ...offeringCategory]);

  return (
    <section className="explore-section-container">
      <div className="explore-section-top">
        <h2 className="explore-section-title">Explore Categories</h2>
        <h3 className="explore-section-subtitle">Click to search!</h3>
      </div>
      <div className="explore-category-container">
        {categories.map((category) => (
          <ExploreCategory
            key={category}
            innerText={category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
