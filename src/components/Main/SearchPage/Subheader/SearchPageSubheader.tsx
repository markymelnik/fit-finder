import { useSelector } from 'react-redux';
import SearchBar from './SearchPageSearchBar';
import MobileFilterButton from './Mobile/MobileFilterButton';
import DesktopFilterMenu from './Desktop/DesktopFilterMenu/DesktopFilterMenu';
import { RootState } from '../../../../redux/store';
import DesktopMapSwitchButton from './Desktop/DesktopMapSwitchButton';

const SearchPageSubheader = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);
  
  return (
    <div className='search-page-header'>
      <div className="filter-options-container">
        <SearchBar />
        {isMobile ? <MobileFilterButton /> : <DesktopFilterMenu />}
      </div>
      {!isMobile && <DesktopMapSwitchButton />}
    </div>
  );
};

export default SearchPageSubheader;
