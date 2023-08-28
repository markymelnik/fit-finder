import { useEffect, useState } from 'react';
import { Map, NavigationControl, Marker } from 'react-map-gl';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/store';
import MapMarkerIcon from '../../../../../assets/icons/map/map-marker-icon.png';
import 'mapbox-gl/dist/mapbox-gl.css'
import MapFacilityCard from './MapFacilityCard';
import { useDispatch } from 'react-redux';
import { setSelectedFacility } from '../../../../../redux/slices/selectedFacilitySlice';
import { Facility } from '../../../../../types/types';
import './_map.scss';

const MapOverlay = () => {

  const facilities = useSelector((state: RootState) => state.facilities.byIds);
  const dispatch = useDispatch<AppDispatch>();
  
  const [error, setError] = useState<string | null>(null);

  const [viewState, setViewState] = useState({
    latitude: 40.62783,
    longitude: -74.02930,
    zoom: 12,
    width: '100%',
    height: '100%'
  });

  const handleCardClick = ({ id, name, address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services }: Facility) => {
    const locationData = ({ id, name,  address, postalCode, neighborhood, latitude, longitude, facilityType, amenities, services });
    dispatch(setSelectedFacility(locationData));
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
                    
                  >
                    <MapFacilityCard 
                      key={facility.id}
                      id={facility.id}
                      name={facility.name}
                      address={facility.address}
                      postalCode={facility.postalCode}
                      neighborhood={facility.neighborhood}
                      latitude={facility.latitude}
                      longitude={facility.longitude}
                      facilityType={facility.facilityType}
                      amenities={facility.amenities}
                      services={facility.services}
                      onClick={handleCardClick}/>
                  </div>
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