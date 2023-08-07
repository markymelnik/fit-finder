import Header from './Header/Header';
import Location from './Facility/FacilityPage';
import Footer from './Footer/Footer';

const LoadFacilityPage = () => {
  return (
    <div className='facility-page-container'>
      <Header />
      <Location />
      <Footer />
    </div>
  );
};

export default LoadFacilityPage;
