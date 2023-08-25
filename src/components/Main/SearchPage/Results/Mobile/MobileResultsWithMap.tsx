import QueryResultInfo from "../SearchResultsComponents/QueryResultInfo";
import MapOverlay from "../SearchResultsComponents/Map/MapOverlay";

const MobileResultsWithMap = () => {

  return (
    <div className="with-map">
      <QueryResultInfo />
      <MapOverlay />
    </div>
  )
}

export default MobileResultsWithMap;
