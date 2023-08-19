import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { setIsMapOverlayShown } from "../../../redux/slices/mapOverlaySlice";
import { useState } from "react";

const MapSwitchButton = () => {

  const [mapView, setCardView] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const isMapOverlayShown = useSelector((state: RootState) => state.isMapOverlayShown.isMapOverlayShown);
  
  const handleViewToggle = () => {
    const isMap = !mapView;
    setCardView(isMap);
    dispatch(setIsMapOverlayShown(!isMapOverlayShown));
  }

  return (
    <div className="map-switch-container">
      <div className="map-switch-text">View</div>
      <div className="map-switch-btn">
        <button 
          className={`card-view ${!mapView ?  'active' : ''}`} 
          onClick={handleViewToggle}
          disabled={!mapView}
        >
          Card
        </button>
        <button 
          className={`map-view ${mapView ? 'active' : ''}`} 
          onClick={handleViewToggle}
          disabled={mapView}
        >
          Map
        </button>
      </div>
    </div>
  )
}

export default MapSwitchButton;
