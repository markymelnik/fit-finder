import React, { Suspense } from "react";

import Footer from "../../../../Footer/Footer";
import MapFallback from "../ResultComponents/Map/MapFallback/MapFallback";
import PaginationBar from "../ResultComponents/PaginationBar/PaginationBar";
import QuerySection from "../ResultComponents/QuerySection/QuerySection";
import ResultCards from "../ResultComponents/ResultCards/ResultCards";

const DesktopResultsWithMap = () => {

  const MapboxMap = React.lazy(() => import('../ResultComponents/Map/MapboxMap/MapboxMap'));

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
      <Suspense fallback={<MapFallback />}>
        <MapboxMap />
      </Suspense>
      
    </div>
  );
};

export default DesktopResultsWithMap;
