import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsMobile } from '../redux/slices/viewportSlice';
import { AppDispatch } from '../redux/store';

const useIsMobile = (): void => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth < 768));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);
};

export default useIsMobile;
