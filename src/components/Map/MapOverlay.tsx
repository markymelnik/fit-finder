import { MouseEvent, useEffect, useState } from 'react';
import { Map, NavigationControl, Marker } from 'react-map-gl';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MapMarkerIcon from '../../assets/imgs/map-marker-icon.png';
import 'mapbox-gl/dist/mapbox-gl.css'

const MapOverlay = () => {

  const facilities = useSelector((state: RootState) => state.facilities.byIds);
  
  const [error, setError] = useState<string | null>(null);

  const [viewState, setViewState] = useState({
    latitude: 40.62783,
    longitude: -74.02930,
    zoom: 12,
    width: '100%',
    height: '100%'
  });

  const handleMarkerClick = (event: MouseEvent<HTMLDivElement>) => {
    const facilityId = event.currentTarget.getAttribute('data-facility-id');
    if (facilityId) {
      console.log(`Facility Id: ${facilityId}`);
    }
  }

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
            
            {Object.values(facilities).map((facility: any) => {
              return (
                <Marker
                key={facility.id}
                longitude={facility.longitude}
                latitude={facility.latitude}
              >
                <div
                  className="map-marker" 
                  data-facility-id={facility.id}
                  style={{ backgroundImage: `url(${MapMarkerIcon})`}}
                  onClick={handleMarkerClick}
                ></div>
              </Marker>
              )
              
            })}
          </Map>
        </>
      )}
    </div>
  )
}

export default MapOverlay;
