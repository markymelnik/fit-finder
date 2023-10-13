import { useEffect, useRef, useState } from "react";

import { Map, NavigationControl, Marker, Popup } from "react-map-gl";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "mapbox-gl/dist/mapbox-gl.css";
import useOutsideClick from "../../../../../../../hooks/useOutsideClick";
import { setSelectedFacility } from "../../../../../../../redux/slices/selectedFacilitySlice";
import { AppDispatch, RootState } from "../../../../../../../redux/store";
import { Facility } from "../../../../../../../types/types";
import MapCard from "../MapCard/MapCard";
import MapMarkerSVG from "../MapMarkerSVG";
import "./_mapbox-map.scss";

const MapboxMap = () => {
  const dispatch = useDispatch<AppDispatch>();
  const facilities = useSelector((state: RootState) => state.facilities.byAllFacilityIds);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupFacility, setPopupFacility] = useState<Facility | null>(null);
  const [isAboveMiddle, setIsAboveMiddle] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | number | null>(null);

  const mapRef = useRef<any>(null);
  const popupRef = useRef(null);

  useOutsideClick(popupRef, () => setShowPopup(false));

  const [viewState, setViewState] = useState({
    latitude: 40.62783,
    longitude: -74.0293,
    zoom: 12,
    width: "100%",
    height: "100%",
  });

  const handleMarkerClick = (facility: Facility) => {
    setPopupFacility({ ...facility });

    if (mapRef.current) {
      const mapInstance = mapRef.current.getMap();
      const markerPosition = mapInstance.project([
        facility.longitude,
        facility.latitude,
      ]);
      setIsAboveMiddle(markerPosition.y < window.innerHeight / 4);
    }
  };

  const handleCardClick = ({ ...facility }: Facility) => {
    const locationData = { ...facility };
    dispatch(setSelectedFacility(locationData));
  };

  useEffect(() => {
    if (!import.meta.env.VITE_MAPBOX_TOKEN) {
      setError("Mapbox token is missing or invalid.");
    }
  }, []);

  return (
    <div className="mapbox-map-container">
      {error ? (
        <div className="map-error">{error}</div>
      ) : (
        <Map
          ref={mapRef}
          {...viewState}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onMove={(evt) =>
            setViewState((prevState) => ({
              ...prevState,
              latitude: evt.viewState.latitude,
              longitude: evt.viewState.longitude,
              zoom: evt.viewState.zoom,
            }))
          }
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN || ""}
        >
          <NavigationControl position="top-left" />
          {Object.values(facilities).map((facility: any) => {
            const isHovered = facility.id === hoveredMarkerId;

            return (
              <Marker
                key={facility.id}
                longitude={facility.longitude}
                latitude={facility.latitude}
                onClick={() => {
                  setShowPopup(true);
                  handleMarkerClick(facility);
                }}
              >
                <div
                  onMouseEnter={() => setHoveredMarkerId(facility.id)}
                  onMouseLeave={() => setHoveredMarkerId(null)}
                >
                  <MapMarkerSVG isHovered={isHovered} />
                </div>
              </Marker>
            );
          })}
          {showPopup && popupFacility && (
            <Popup
              latitude={popupFacility.latitude}
              longitude={popupFacility.longitude}
              onClose={() => setPopupFacility(null)}
              closeOnClick={false}
            >
              <div ref={popupRef}>
                <MapCard
                  {...popupFacility}
                  onClick={handleCardClick}
                  isAboveMiddle={isAboveMiddle}
                />
              </div>
            </Popup>
          )}
        </Map>
      )}
    </div>
  );
};

export default MapboxMap;
