import { useSelector } from 'react-redux';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SearchPage from '../components/Main/SearchPage/SearchPage';
import { RootState } from '../redux/store';

const LoadSearchPage = () => {
  const isMapOverlayShown = useSelector((state: RootState) => state.mapOverlay.isMapOverlayShown);

  return (
    <>
      <Header />
      <SearchPage />
      {!isMapOverlayShown && <Footer />}
    </>
  );
};

export default LoadSearchPage;
