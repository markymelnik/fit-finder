import { useEffect, useState } from 'react';
import { Map, NavigationControl } from 'react-map-gl';

const MapOverlay = () => {

  const [error, setError] = useState<string | null>(null);

  const [viewState, setViewState] = useState({
    latitude: 40.627831,
    longitude: -74.029301,
    zoom: 12,
    width: '100%',
    height: '100%'
  });

  useEffect(() => {
    if (!import.meta.env.VITE_MAPBOX_TOKEN) {
      setError('Mapbox token is missing or invalid.');
    }
  }, []);
  
  return (
    <div className="map-overlay-container">
      {error ? (
        <div className="map-error">{error}</div>
      ) : (
        <>
          <Map
            {...viewState}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onMove={evt => setViewState(prevState => ({
              ...prevState,
              latitude: evt.viewState.latitude,
              longitude: evt.viewState.longitude,
              zoom: evt.viewState.zoom
            }))}
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN || ''}
          >
            <NavigationControl position='top-left' />
          </Map>
        </>
      )}
    </div>
  )
}

export default MapOverlay;
