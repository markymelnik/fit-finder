import Header from '../Header/Header';
import SearchPage from '../SearchPage/SearchPage';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const LoadSearchPage = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);
  const isMapOverlayShown = useSelector((state: RootState) => state.isMapOverlayShown.isMapOverlayShown);

  return (
    <>
      <Header />
      <SearchPage />
      {!isMobile && isMapOverlayShown || <Footer />}
    </>
  );
};

export default LoadSearchPage;
