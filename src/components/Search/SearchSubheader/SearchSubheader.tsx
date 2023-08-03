import { useSelector } from 'react-redux';
import SearchBar from './SubheaderSearchBar';
import MobileFilterDropdown from '../MobileSearch/MobileFilterDropdown';
import DesktopFilterMenu from '../DesktopSearch/DesktopFilterMenu';

const SearchSubheader = () => {
  const isMobile = useSelector((state) => state.isMobile);
  return (
    <div className='search-subheader-container'>
      <SearchBar />
      {isMobile ? <MobileFilterDropdown /> : <DesktopFilterMenu />}
    </div>
  );
};

export default SearchSubheader;
