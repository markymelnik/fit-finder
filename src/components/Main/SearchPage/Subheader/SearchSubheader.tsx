import { useSelector } from 'react-redux';
import SearchPageSearchbar from './SearchPageSearchbar/SearchPageSearchbar';
import MobileFilterToggleButton from './Mobile/MobileFilterToggleButton/MobileFilterToggleButton';
import DesktopFilterMenu from './Desktop/DesktopFilterMenu/DesktopFilterMenu';
import { RootState } from '../../../../redux/store';
import DesktopMapSwitchButton from './Desktop/DesktopMapSwitchButton/DesktopMapSwitchButton';
import './_search-subheader.scss';

const SearchSubheader = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);
  
  return (
    <div className='search-page-subheader-container'>
      <div className="filter-options-container">
        <SearchPageSearchbar />
        {isMobile ? <MobileFilterToggleButton /> : <DesktopFilterMenu />}
      </div>
      {!isMobile && <DesktopMapSwitchButton />}
    </div>
  );
};

export default SearchSubheader;