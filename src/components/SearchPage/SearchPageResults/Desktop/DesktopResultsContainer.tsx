import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import DesktopResultsWithMap from "./DesktopResultsWithMap";
import DesktopResultsWithoutMap from "./DesktopResultsWithoutMap";

const DesktopResultsContainer = () => {

  const isMapOverlayShown = useSelector((state: RootState) => state.isMapOverlayShown.isMapOverlayShown);
  
  return isMapOverlayShown ? <DesktopResultsWithMap /> : <DesktopResultsWithoutMap />;
}

export default DesktopResultsContainer;
