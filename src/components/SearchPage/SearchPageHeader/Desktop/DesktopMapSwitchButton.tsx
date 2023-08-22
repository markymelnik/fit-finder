import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { setIsMapOverlayShown } from "../../../../redux/slices/mapOverlaySlice";

const DesktopMapSwitchButton = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMapOverlayShown = useSelector((state: RootState) => state.isMapOverlayShown.isMapOverlayShown);
  
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