import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { setIsMobileMenuOpen } from "../../../../redux/slices/mobileMenuSlice";
import { useSelector } from "react-redux";

const TintedOverlay = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);

  const handleOverlayClick = () => {
    dispatch(setIsMobileMenuOpen(!isMobileMenuOpen));
  }
  return (
  <button className='tinted-overlay' onClick={handleOverlayClick}></button>
  )
};

export default TintedOverlay;
