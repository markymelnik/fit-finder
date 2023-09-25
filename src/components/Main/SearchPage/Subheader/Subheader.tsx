import { useSelector } from 'react-redux';
import SearchPageSearchbar from './SearchPageSearchbar/SearchPageSearchbar';
import MobileFilterToggleButton from './MobileSubheader/MobileFilterMenuToggleButton/MobileFilterMenuToggleButton';
import DesktopFilterMenu from './DesktopSubheader/DesktopFilterMenu/DesktopFilterMenu';
import { RootState } from '../../../../redux/store';
import DesktopMapSwitchButton from './DesktopSubheader/DesktopMapSwitchButton/DesktopMapSwitchButton';
import './_subheader.scss';

const Subheader = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);
  
  return (
    <div className='search-page-subheader-container'>
      <div className="search-options-container">
        <SearchPageSearchbar />
        {isMobile ? <MobileFilterToggleButton /> : <DesktopFilterMenu />}
      </div>
      {!isMobile && <DesktopMapSwitchButton />}
    </div>
  );
};

export default Subheader;
