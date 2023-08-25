import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import MobileResultsWithMap from "./MobileResultsWithMap";
import MobileResultsWithoutMap from "./MobileResultsWithoutMap";

const MobileResultsContainer = () => {

  const isMapOverlayShown = useSelector((state: RootState) => state.isMapOverlayShown.isMapOverlayShown);

  return isMapOverlayShown ? <MobileResultsWithMap /> : <MobileResultsWithoutMap />;
}

export default MobileResultsContainer;
