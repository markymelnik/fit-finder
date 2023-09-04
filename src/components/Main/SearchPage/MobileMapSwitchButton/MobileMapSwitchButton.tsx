import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { setIsMapOverlayShown } from "../../../../redux/slices/mapOverlaySlice";
import MapIcon from '../../../../assets/icons/map/map-icon.png';
import ListIcon from '../../../../assets/icons/map/list-icon.png';
import './_mobile-map-switch-btn.scss';

const MobileMapSwitchButton = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isMapOverlayShown = useSelector((state: RootState) => state.isMapOverlayShown.isMapOverlayShown);

  const buttonText = isMapOverlayShown ? 'List View' : 'Map View';
  const buttonIcon = isMapOverlayShown ? ListIcon : MapIcon;

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
          <img src={buttonIcon} alt="map switch button icon" />
        </div>
        <div className="btn-text">{buttonText}</div>
        
      </button>
    </div>
  )
}

export default MobileMapSwitchButton;
