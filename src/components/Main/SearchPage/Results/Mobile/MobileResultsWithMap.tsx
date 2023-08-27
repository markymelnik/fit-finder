import QueryResultInfo from "../QuerySection/QueryResultInfo";
import MapOverlay from "../Map/MapOverlay";

const MobileResultsWithMap = () => {

  return (
    <div className="with-map">
      <QueryResultInfo />
      <MapOverlay />
    </div>
  )
}

export default MobileResultsWithMap;
