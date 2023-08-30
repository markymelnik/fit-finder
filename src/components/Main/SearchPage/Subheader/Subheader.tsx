import { useSelector } from 'react-redux';
import SPSearchBar from './SPSearchBar/SPSearchBar';
import MobileFilterToggleButton from './Mobile/MobileFilterToggleButton/MobileFilterToggleButton';
import DesktopFilterMenu from './Desktop/DesktopFilterMenu/DesktopFilterMenu';
import { RootState } from '../../../../redux/store';
import DesktopMapSwitchButton from './Desktop/DesktopMapSwitchButton/DesktopMapSwitchButton';
import './_subheader.scss';

const Subheader = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);
  
  return (
    <div className='search-page-subheader-container'>
      <div className="filter-options-container">
        <SPSearchBar />
        {isMobile ? <MobileFilterToggleButton /> : <DesktopFilterMenu />}
      </div>
      {!isMobile && <DesktopMapSwitchButton />}
    </div>
  );
};

export default Subheader;
