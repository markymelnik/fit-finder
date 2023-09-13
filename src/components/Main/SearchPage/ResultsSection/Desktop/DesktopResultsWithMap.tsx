import QuerySection from "../QuerySection/QuerySection";
import ResultsList from "../ResultsList/ResultsList";
import Footer from "../../../../Footer/Footer";
import MapOverlay from "../Map/MapOverlay";

const DesktopResultsWithMap = () => {

  return (
    <div className="with-map">
      <div className="result-left">
        <QuerySection />
        <ResultsList />
        <div className="desktop-map-view-wrapper">
          <Footer />
        </div>
      </div>
      <div className="vertical-divider">
          <div className="divider"></div>
        </div>
      <MapOverlay />
    </div>
  )
}

export default DesktopResultsWithMap;
