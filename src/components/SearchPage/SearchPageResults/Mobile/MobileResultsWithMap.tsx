import QueryResultInfo from "../SearchResultsComponents/QueryResultInfo";
import MapOverlay from "../SearchResultsComponents/MapOverlay";
import SearchResults from "../SearchResultsComponents/SearchResults";

const MobileResultsWithMap = () => {

  return (
    <div className="with-map">
      <QueryResultInfo />
      <SearchResults />
      <MapOverlay />
    </div>
  )
}

export default MobileResultsWithMap;
