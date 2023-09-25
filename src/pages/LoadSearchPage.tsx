import Header from '../components/Header/Header';
import SearchPage from '../components/Main/SearchPage/SearchPage';
import Footer from '../components/Footer/Footer';
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
