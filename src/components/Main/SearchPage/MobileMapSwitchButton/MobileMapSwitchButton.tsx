import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { setIsMapOverlayShown } from "../../../../redux/slices/mapOverlaySlice";
import './_mobile-map-switch-btn.scss';

const MobileMapSwitchButton = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMapOverlayShown = useSelector((state: RootState) => state.isMapOverlayShown.isMapOverlayShown);

  const buttonText = isMapOverlayShown ? 'Card View' : 'Map View';

  const handleViewToggle = () => {
    dispatch(setIsMapOverlayShown(!isMapOverlayShown));
  }

  return (
    <div className="mobile-map-switch-container">
      <button 
        className="mobile-map-switch-btn"
        onClick={handleViewToggle}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default MobileMapSwitchButton;
