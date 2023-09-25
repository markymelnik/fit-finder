import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setIsMapOverlayShown } from "../../../../../../redux/slices/mapOverlaySlice";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import './_desktop-map-switch-btn.scss';

const DesktopMapSwitchButton = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMapOverlayShown = useSelector((state: RootState) => state.mapOverlay.isMapOverlayShown);
  
  const handleViewToggle = () => {
    dispatch(setIsMapOverlayShown(!isMapOverlayShown));
  }

  return (
    <div className="desktop-map-switch-container">
      <div className="desktop-map-switch-btn">
        <button 
          className={`card-view ${!isMapOverlayShown ?  'active' : ''}`} 
          onClick={handleViewToggle}
          disabled={!isMapOverlayShown}
        >
          Card
        </button>
        <button 
          className={`map-view ${isMapOverlayShown ? 'active' : ''}`} 
          onClick={handleViewToggle}
          disabled={isMapOverlayShown}
        >
          Map
        </button>
      </div>
    </div>
  )
}

export default DesktopMapSwitchButton;
