import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadHomePage from './components/LoadPages/LoadHomePage';
import LoadSearchPage from './components/LoadPages/LoadSearchPage';
import LoadSelectedFacilityPage from './components/LoadPages/LoadSelectedFacilityPage';
import useIsMobile from './hooks/useIsMobile';
import MobileFilter from './components/SearchPage/SearchPageHeader/Mobile/MobileFilter';

const App = () => {
  useIsMobile();

  return (
    <Router>
      <MobileFilter />
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
