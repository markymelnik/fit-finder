import React, { Suspense } from 'react';

import MapFallback from '../ResultComponents/Map/MapFallback/MapFallback';

const MobileResultsWithMap = () => {

  const MapboxMap = React.lazy(() => import('../ResultComponents/Map/MapboxMap/MapboxMap'));
  
  return (
    <div className="with-map">
      <Suspense fallback={<MapFallback />}>
        <MapboxMap />
      </Suspense>
    </div>
  );
};

export default MobileResultsWithMap;
