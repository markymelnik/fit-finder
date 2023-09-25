import { useSelector } from "react-redux";

import DesktopResultsWithMap from "./DesktopResultsWithMap";
import DesktopResultsWithoutMap from "./DesktopResultsWithoutMap";
import { RootState } from "../../../../../redux/store";
import './_deskop-results.scss';

const DesktopResultsContainer = () => {

  const isMapOverlayShown = useSelector((state: RootState) => state.mapOverlay.isMapOverlayShown);
  
  return isMapOverlayShown ? <DesktopResultsWithMap /> : <DesktopResultsWithoutMap />;
}

export default DesktopResultsContainer;
