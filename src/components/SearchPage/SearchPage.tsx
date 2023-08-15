import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MobileSearchPage from './SearchPageHeader/MobileSearchPage/MobileSearchPage';
import DesktopSearchPage from './SearchPageHeader/DesktopSearchPage/DesktopSearchPage';

const SearchPage = () => {
  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return isMobile ? <MobileSearchPage /> : <DesktopSearchPage />;
};

export default SearchPage;
