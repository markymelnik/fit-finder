import Header from '../components/header/Header';
import SearchPage from '../components/main/SearchPage/SearchPage';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';
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
