import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import DesktopResultsWithMap from "./DesktopResultsWithMap";
import DesktopResultsWithoutMap from "./DesktopResultsWithoutMap";
import './_deskop-results.scss';

const DesktopResultsContainer = () => {

  const isMapOverlayShown = useSelector((state: RootState) => state.mapOverlay.isMapOverlayShown);
  
  return isMapOverlayShown ? <DesktopResultsWithMap /> : <DesktopResultsWithoutMap />;
}

export default DesktopResultsContainer;
