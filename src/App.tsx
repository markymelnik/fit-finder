import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadHomePage from './components/LoadHomePage';
import LoadSearchPage from './components/LoadSearchPage';
import LoadSelectedFacilityPage from './components/LoadSelectedFacilityPage';
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
