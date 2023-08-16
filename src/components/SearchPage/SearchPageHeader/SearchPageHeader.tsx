import { useSelector } from 'react-redux';
import SearchBar from './SearchPageSearchBar';
import MobileFilterDropdown from './MobileSearchPage/MobileFilterDropdown';
import DesktopFilterMenu from './DesktopSearchPage/DesktopFilterMenu';
import { RootState } from '../../../redux/store';

const SearchPageHeader = () => {
  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);
  return (
    <div className='search-page-header'>
      <SearchBar />
      {isMobile ? <MobileFilterDropdown /> : <DesktopFilterMenu />}
    </div>
  );
};

export default SearchPageHeader;
