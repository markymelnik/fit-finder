import { useDispatch } from "react-redux";

import ExploreCategory from "./ExploreCategory/ExploreCategory";
import { setSelectedAmenities, setSelectedFacilityTypes, setSelectedOfferings } from "../../../../redux/slices/filterSlice";
import { shuffleArray } from "../../../common/shuffleArray";
import "./_explore-section.scss";

const ExploreSection = () => {

  const dispatch = useDispatch();

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
    "Sauna/Steam Room",
    "Swimming Pool"
  ];

  const offeringCategory = [
    "Personal Training",
    "Group Classes"
  ];

  const handleCategoryClick = (category: string) => {
    const selectedCategory = [category];
    console.log(selectedCategory);

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
  }

  const categories = shuffleArray([...typeCategory, ...amenityCategory, ...offeringCategory]);

  return (
    <div className="explore-section-container">
      <div className="explore-section-title">Explore Categories</div>
      <div className="explore-category-container">
        {categories.map((category) => (
          <ExploreCategory
            key={category}
            innerText={category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
