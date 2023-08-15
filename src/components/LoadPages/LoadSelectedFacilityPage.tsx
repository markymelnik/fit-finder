import Header from '../Header/Header';
import FacilityPage from '../FacilityPage/FacilityPage';
import Footer from '../Footer/Footer';

const LoadFacilityPage = () => {
  return (
    <div className="selected-facility-container">
      <Header />
      <FacilityPage />
      <Footer />
    </div>
  );
};

export default LoadFacilityPage;
