import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const useHeaderSearchbarVisibility = (thresholdPercentage = 0.31) => {

  const [showSearchbar, setShowSearchbar] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const threshold = window.innerHeight * thresholdPercentage;

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        if (window.scrollY > threshold) {
          setShowSearchbar(true);
        } else {
          setShowSearchbar(false);
        }
      }
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }, [isHomePage, threshold]);

  return showSearchbar;
}

export default useHeaderSearchbarVisibility;
