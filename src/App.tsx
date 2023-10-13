import './styles/global.scss';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthForm from './components/auth/AuthForm';
import RedirectToHome from './components/common/RedirectToHome';
import MobileFilterMenu from './components/Main/SearchPage/Subheader/MobileSubheader/MobileFilterMenu/MobileFilterMenu';
import useIsMobile from './hooks/useIsMobile';
import usePreventScrolling from './hooks/usePreventScrolling';
import ScrollToTop from './hooks/useScrollToTop';
import LoadAccountPage from './pages/LoadAccountPage';
import LoadSelectedFacilityPage from './pages/LoadFacilityPage';
import LoadHomePage from './pages/LoadHomePage';
import LoadSearchPage from './pages/LoadSearchPage';
import { RootState } from './redux/store';

const App = () => {
  useIsMobile();
  
  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);
  const isAuthFormOpen = useSelector((state: RootState) => state.authForm.isAuthFormOpen);
  const setIsSidebarMenuOpen = useSelector((state: RootState) => state.sidebarMenu.isSidebarMenuOpen);

  usePreventScrolling(isAuthFormOpen);
  usePreventScrolling(setIsSidebarMenuOpen);

  return (
    <SkeletonTheme baseColor='#C4CfD9' highlightColor='#E6EBF0'>
      <Router>
        <ScrollToTop />
        {isMobile && <MobileFilterMenu />}
        <AuthForm />
        <div className='site-container'>
          <Routes>
            <Route path='/' element={<LoadHomePage />} />
            <Route path='/search' element={<LoadSearchPage />} />
            <Route path='/facility/:id' element={<LoadSelectedFacilityPage />} />
            <Route path='/facility' element={<RedirectToHome />} />
            <Route path='/account' element={<LoadAccountPage /> } />
          </Routes>
        </div>
      </Router>
    </SkeletonTheme>
  );
};

export default App;
