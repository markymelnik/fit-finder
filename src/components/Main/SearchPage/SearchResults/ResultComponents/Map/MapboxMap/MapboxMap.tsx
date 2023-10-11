import { useEffect, useRef, useState } from "react";

import { Map, NavigationControl, Marker, Popup } from "react-map-gl";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "mapbox-gl/dist/mapbox-gl.css";
import useOutsideClick from "../../../../../../../hooks/useOutsideClick";
import { setSelectedFacility } from "../../../../../../../redux/slices/selectedFacilitySlice";
import { AppDispatch, RootState } from "../../../../../../../redux/store";
import { Facility } from "../../../../../../../types/types";
import "./_mapbox-map.scss";
import MapCard from "../MapCard/MapCard";
import MarkerSVG from "../MarkerSVG";

const MapboxMap = () => {

  const dispatch = useDispatch<AppDispatch>();
  const facilities = useSelector((state: RootState) => state.facilities.byAllFacilityIds);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupFacility, setPopupFacility] = useState<Facility | null>(null);
  const popupRef = useRef(null);
  const [error, setError] = useState<string | null>(null);

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
                <MarkerSVG />
              </Marker>
            );
          })}
          {showPopup && popupFacility && (
            <div ref={popupRef}>
              <Popup
                latitude={popupFacility.latitude}
                longitude={popupFacility.longitude}
                onClose={() => setPopupFacility(null)}
                closeOnClick={false}
              >
                <MapCard {...popupFacility} onClick={handleCardClick} />
              </Popup>
            </div>
          )}
        </Map>
      )}
    </div>
  );
};

export default MapboxMap;
