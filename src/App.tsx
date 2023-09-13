import './styles/global.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadHomePage from './pages/LoadHomePage';
import LoadSearchPage from './pages/LoadSearchPage';
import LoadSelectedFacilityPage from './pages/LoadFacilityPage';
import LoadAccountPage from './pages/LoadAccountPage';
import useIsMobile from './hooks/useIsMobile';
import MobileFilterDisplay from './components/Main/SearchPage/Subheader/Mobile/MobileFilterDisplay/MobileFilterDisplay';
import LoginSignupForm from './components/LoginSignupForm/LoginSignupForm';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { SkeletonTheme } from 'react-loading-skeleton';

const App = () => {
  useIsMobile();

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return (
    <SkeletonTheme baseColor='#C4CfD9' highlightColor='#E6EBF0'>
      <Router>
        {isMobile && <MobileFilterDisplay />}
        <LoginSignupForm />
        <div className='site-container'>
          <Routes>
            <Route path='/' element={<LoadHomePage />} />
            <Route path='/search' element={<LoadSearchPage />} />
            <Route path='/facility' element={<LoadSelectedFacilityPage />} />
            <Route path='/account' element={<LoadAccountPage /> } />
          </Routes>
        </div>
      </Router>
    </SkeletonTheme>
  );
};

export default App;
