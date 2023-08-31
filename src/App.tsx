import './styles/global.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadHomePage from './pages/LoadHomePage';
import LoadSearchPage from './pages/LoadSearchPage';
import LoadSelectedFacilityPage from './pages/LoadFacilityPage';
import useIsMobile from './hooks/useIsMobile';
import MobileFilter from './components/Main/SearchPage/Subheader/Mobile/MobileFilterDisplay/MobileFilterDisplay';
import LoginSignupForm from './components/LoginSignupForm/LoginSignupForm';

const App = () => {
  useIsMobile();

  return (
    <Router>
      <MobileFilter />
      <LoginSignupForm />
      <div className='site-container'>
        <Routes>
          <Route path='/' element={<LoadHomePage />} />
          <Route path='/search' element={<LoadSearchPage />} />
          <Route path='/facility' element={<LoadSelectedFacilityPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
