import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsMobile } from '../redux/mobileSlice';

const useIsMobile = () => {

  const dispatch = useDispatch();

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
}

export default useIsMobile;
