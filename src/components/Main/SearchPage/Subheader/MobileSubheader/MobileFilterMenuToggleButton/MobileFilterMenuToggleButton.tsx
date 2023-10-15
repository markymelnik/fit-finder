import { useDispatch } from 'react-redux';

import ToggleButtonSVG from './ToggleButtonSVG';
import { setIsMobileFilterOpen } from '../../../../../../redux/slices/mobileFilterSlice';
import { AppDispatch } from '../../../../../../redux/store';
import './_mobile-filter-menu-toggle-btn.scss';

const MobileFilterMenuToggleButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(setIsMobileFilterOpen(true));
  }

  return (
    <button  onClick={handleButtonClick} className='mobile-filter-menu-toggle-btn'>
      <ToggleButtonSVG />
    </button>
  )
};

export default MobileFilterMenuToggleButton;
