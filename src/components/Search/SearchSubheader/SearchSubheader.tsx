import { useSelector } from 'react-redux';
import SearchBar from './SubheaderSearchBar';
import MobileFilterDropdown from '../MobileSearch/MobileFilterDropdown';
import DesktopFilterMenu from '../DesktopSearch/DesktopFilterMenu';
import { RootState } from '../../../redux/store';

const SearchSubheader = () => {
  const isMobile = useSelector((state: RootState) => state.isMobile);
  return (
    <div className='search-subheader-container'>
      <SearchBar />
      {isMobile ? <MobileFilterDropdown /> : <DesktopFilterMenu />}
    </div>
  );
};

export default SearchSubheader;
