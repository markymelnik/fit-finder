import { useDispatch } from 'react-redux';
import FilterIcon from '../../../../../../assets/icons/search/filter-icon.png';
import { AppDispatch } from '../../../../../../redux/store';
import { setIsMobileFilterOpen } from '../../../../../../redux/slices/mobileFilterSlice';
import './_mobile-filter-toggle-btn.scss';

const MobileFilterButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsMobileFilterOpen(true));
  }

  return (
    <button 
      type="button" 
      className='mobile-filter-toggle-btn'
      onClick={handleButtonClick}
      style={{ backgroundImage: `url(${FilterIcon})`}}
    ></button>
  )
};

export default MobileFilterButton;