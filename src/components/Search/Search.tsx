import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MobileSearch from './MobileSearch/MobileSearch';
import DesktopSearch from './DesktopSearch/DesktopSearch';

const Search = () => {
  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return isMobile ? <MobileSearch /> : <DesktopSearch />;
};

export default Search;
