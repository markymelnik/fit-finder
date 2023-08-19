import { useSelector } from 'react-redux';
import SearchBar from './SearchPageSearchBar';
import MobileFilterDropdown from './Mobile/MobileFilterDropdown';
import DesktopFilterMenu from './Desktop/DesktopFilterMenu';
import { RootState } from '../../../redux/store';
import DesktopMapSwitchButton from './Desktop/DesktopMapSwitchButton';

const SearchPageHeader = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);
  
  return (
    <div className='search-page-header'>
      <div className="filter-options-container">
        <SearchBar />
        {isMobile ? <MobileFilterDropdown /> : <DesktopFilterMenu />}
      </div>
      {!isMobile && <DesktopMapSwitchButton />}
    </div>
  );
};

export default SearchPageHeader;
