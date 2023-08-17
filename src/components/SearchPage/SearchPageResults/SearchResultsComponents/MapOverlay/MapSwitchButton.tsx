import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { useSelector } from "react-redux";
import { setIsMapOverlayShown } from "../../../../../redux/slices/mapOverlaySlice";
const MapSwitchButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const isMapOverlayShown = useSelector((state: RootState) => state.isMapOverlayShown.isMapOverlayShown);
  
  const handleClick = () => {
    dispatch(setIsMapOverlayShown(!isMapOverlayShown));
  }

  return (
    <button className="map-switch-btn" onClick={handleClick}></button>
  )
}

export default MapSwitchButton;
