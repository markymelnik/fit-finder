import Footer from "../../../../Footer/Footer";
import MapOverlay from "../ResultComponents/Map/MapOverlay/MapOverlay";
import PaginationBar from "../ResultComponents/PaginationBar/PaginationBar";
import QuerySection from "../ResultComponents/QuerySection/QuerySection";
import ResultCards from "../ResultComponents/ResultCards/ResultCards";

const DesktopResultsWithMap = () => {

  return (
    <div className="with-map">
      <div className="result-left">
        <QuerySection />
        <ResultCards />
        <PaginationBar />
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
