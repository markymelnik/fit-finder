import SearchBar from './SearchBar';
import MobileFilterDropdown from '../MobileSearch/MobileFilterDropdown';
import DesktopFilterMenu from '../DesktopSearch/DesktopFilterMenu';

const SearchSubheader = ({ useIsMobile }) => {
  return (
    <div className='search-subheader-container'>
      <SearchBar />
      {useIsMobile ? <MobileFilterDropdown /> : <DesktopFilterMenu />}
    </div>
  );
};

export default SearchSubheader;
