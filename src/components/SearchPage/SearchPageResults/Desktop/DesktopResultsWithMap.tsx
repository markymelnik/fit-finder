import QueryResultInfo from "../SearchResultsComponents/QueryResultInfo";
import SearchResults from "../SearchResultsComponents/SearchResults";
import Footer from "../../../Footer/Footer";
import MapOverlay from "../../../Map/MapOverlay";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const DesktopResultsWithMap = () => {

  return (
    <div className="with-map">
      <div className="result-left">
        <QueryResultInfo />
        <SearchResults />
        <div className="desktop-map-view-wrapper">
          <Footer />
        </div>
      </div>
      <MapOverlay />
    </div>
  )
}

export default DesktopResultsWithMap;
