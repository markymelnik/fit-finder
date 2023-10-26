import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import ListSVG from "../../../../assets/svg/map/ListSVG";
import MapSVG from "../../../../assets/svg/map/MapSVG";
import { setIsMapOverlayShown } from "../../../../redux/slices/mapOverlaySlice";
import { AppDispatch, RootState } from "../../../../redux/store";
import './_mobile-map-switch-btn.scss';

const MobileMapSwitchButton = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMapOverlayShown = useSelector((state: RootState) => state.mapOverlay.isMapOverlayShown);

  const buttonText = isMapOverlayShown ? 'List View' : 'Map View';
  const buttonIcon = isMapOverlayShown ? <ListSVG /> : <MapSVG />;

  const handleViewToggle = () => {
    dispatch(setIsMapOverlayShown(!isMapOverlayShown));
  }

  return (
    <div className="mobile-map-switch-container">
      <button 
        className="mobile-map-switch-btn"
        onClick={handleViewToggle}
      >
        <div className="btn-icon">
          {buttonIcon}
        </div>
        <div className="btn-text">{buttonText}</div>
      </button>
    </div>
  )
}

export default MobileMapSwitchButton;
