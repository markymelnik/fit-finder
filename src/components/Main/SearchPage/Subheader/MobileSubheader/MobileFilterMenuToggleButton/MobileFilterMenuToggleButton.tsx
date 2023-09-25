import { useDispatch } from 'react-redux';
import FilterIcon from '../../../../../../assets/icons/search/filter-icon.png';
import { AppDispatch } from '../../../../../../redux/store';
import { setIsMobileFilterOpen } from '../../../../../../redux/slices/mobileFilterSlice';
import './_mobile-filter-menu-toggle-btn.scss';

const MobileFilterMenuToggleButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsMobileFilterOpen(true));
  }

  return (
    <button  onClick={handleButtonClick} className='mobile-filter-menu-toggle-btn'>
      <img src={FilterIcon}/>
    </button>
  )
};

export default MobileFilterMenuToggleButton;
