import QueryResultInfo from "../SearchResultsComponents/QueryResultInfo";
import MapOverlay from "../SearchResultsComponents/MapOverlay/MapOverlay";
import SearchResults from "../SearchResultsComponents/SearchResults";

const DesktopResultsWithMap = () => {

  return (
    <div className="with-map">
      <div className="result-left">
        <QueryResultInfo />
        <SearchResults />
      </div>
      <MapOverlay />
    </div>
  )
}

export default DesktopResultsWithMap;
