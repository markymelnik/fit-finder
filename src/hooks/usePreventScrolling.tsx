import { useEffect } from "react";

const usePreventScrolling = (isActive: boolean) => {

  useEffect(() => {
    isActive
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto';

      return () => {
        document.body.style.overflow = 'hidden'
      }
  }, [isActive])
};

export default usePreventScrolling;