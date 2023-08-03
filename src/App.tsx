import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadHomePage from './components/LoadHomePage';
import LoadSearchPage from './components/LoadSearchPage';
import useIsMobile from './hooks/useIsMobile';

const App = () => {
  useIsMobile();

  return (
    <div className='site-container'>
      <Router>
        <Routes>
          <Route path='/' element={<LoadHomePage />} />
          <Route path='/search' element={<LoadSearchPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
