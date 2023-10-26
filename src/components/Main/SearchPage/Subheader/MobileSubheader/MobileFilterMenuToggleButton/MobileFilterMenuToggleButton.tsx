import { useDispatch } from 'react-redux';

import MobileFilterSVG from '../../../../../../assets/svg/mobile/MobileFilterSVG';
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
      <MobileFilterSVG />
    </button>
  )
};

export default MobileFilterMenuToggleButton;
