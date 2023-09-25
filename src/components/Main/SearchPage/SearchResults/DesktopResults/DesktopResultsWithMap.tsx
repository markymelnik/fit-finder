import QuerySection from "../ResultComponents/QuerySection/QuerySection";
import ResultCards from "../ResultComponents/ResultCards/ResultCards";
import Footer from "../../../../footer/Footer";
import MapOverlay from "../ResultComponents/Map/MapOverlay/MapOverlay";

const DesktopResultsWithMap = () => {

  return (
    <div className="with-map">
      <div className="result-left">
        <QuerySection />
        <ResultCards />
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
