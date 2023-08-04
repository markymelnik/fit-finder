import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsMobile } from '../redux/mobileSlice';
import { AppDispatch } from '../redux/store';

const useIsMobile = (): void => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) dispatch(setIsMobile(true));
      else dispatch(setIsMobile(false));
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);
};

export default useIsMobile;
