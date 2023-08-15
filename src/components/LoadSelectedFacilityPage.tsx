import Header from './Header/Header';
import SelectedFacilityPage from './SelectedFacilityPage/SelectedFacilityPage';
import Footer from './Footer/Footer';

const LoadFacilityPage = () => {
  return (
    <div className="selected-facility-container">
      <Header />
      <SelectedFacilityPage />
      <Footer />
    </div>
  );
};

export default LoadFacilityPage;
