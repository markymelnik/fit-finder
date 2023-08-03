import { useSelector } from 'react-redux';
import MobileSearch from './MobileSearch/MobileSearch';
import DesktopSearch from './DesktopSearch/DesktopSearch';

const Search = () => {
  const isMobile = useSelector((state) => state.isMobile);

  return isMobile ? <MobileSearch /> : <DesktopSearch />;
};

export default Search;
