import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadHomePage from './components/LoadPages/LoadHomePage';
import LoadSearchPage from './components/LoadPages/LoadSearchPage';
import LoadSelectedFacilityPage from './components/LoadPages/LoadSelectedFacilityPage';
import useIsMobile from './hooks/useIsMobile';

const App = () => {
  useIsMobile();

  return (
    <div className='site-container'>
      <Router>
        <Routes>
          <Route path='/' element={<LoadHomePage />} />
          <Route path='/search' element={<LoadSearchPage />} />
          <Route path='/facility' element={<LoadSelectedFacilityPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
