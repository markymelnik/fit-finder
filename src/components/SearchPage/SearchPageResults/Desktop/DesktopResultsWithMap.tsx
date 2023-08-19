import QueryResultInfo from "../SearchResultsComponents/QueryResultInfo";
import SearchResults from "../SearchResultsComponents/SearchResults";
import Footer from "../../../Footer/Footer";
import MapOverlay from "../SearchResultsComponents/MapOverlay";

const DesktopResultsWithMap = () => {

  return (
    <div className="with-map">
      <div className="result-left">
        <QueryResultInfo />
        <SearchResults />
        <Footer />
      </div>
      <MapOverlay />
    </div>
  )
}

export default DesktopResultsWithMap;
