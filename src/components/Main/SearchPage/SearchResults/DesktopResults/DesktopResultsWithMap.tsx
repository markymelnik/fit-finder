import Footer from "../../../../Footer/Footer";
import MapboxMap from "../ResultComponents/Map/MapboxMap/MapboxMap";
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
        <Footer />
      </div>
      <div className="vertical-divider">
        <div className="divider"></div>
      </div>

      <MapboxMap />
    </div>
  );
};

export default DesktopResultsWithMap;
