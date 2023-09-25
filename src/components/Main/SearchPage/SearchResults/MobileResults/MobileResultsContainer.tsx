import { useSelector } from "react-redux";

import MobileResultsWithMap from "./MobileResultsWithMap";
import MobileResultsWithoutMap from "./MobileResultsWithoutMap";
import { RootState } from "../../../../../redux/store";
import './_mobile-results.scss';

const MobileResultsContainer = () => {

  const isMapOverlayShown = useSelector((state: RootState) => state.mapOverlay.isMapOverlayShown);

  return isMapOverlayShown ? <MobileResultsWithMap /> : <MobileResultsWithoutMap />;
}

export default MobileResultsContainer;
