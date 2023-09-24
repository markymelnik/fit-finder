import { setSelectedFacilityTypes } from '../../../../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/store';
import './_explore-category.scss';


type ExploreCategoryProps = {
  innerText: string;
}

const ExploreCategory = ({ innerText }: ExploreCategoryProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleCategoryClick = () => {
    dispatch(setSelectedFacilityTypes([innerText]));
  }

  return (
    <div className="explore-category" onClick={handleCategoryClick}>
      <div className="category-text">{innerText}</div>
    </div>
  );
};

export default ExploreCategory;
