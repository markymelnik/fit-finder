import { createSelector } from "reselect";

import { retrieveAmenitiesForFacility, retrieveServicesForFacility } from "../slices/facilitySlice";
import { RootState } from "../store";

const getSelectedFacility = (state: RootState) => state.selectedFacility?.selectedFacility;
const getFacilities = (state: RootState) => state.facilities;

// eslint-disable-next-line @typescript-eslint/ban-types
const createFacilityDataSelector = (retrievalFunction: Function) => {
  return createSelector(
    [getSelectedFacility, getFacilities],
    (selectedFacility, facilities) => {
      if (selectedFacility) {
        return retrievalFunction(facilities, selectedFacility.id);
      }
    return [];
    }
  );
};

export const amenitiesSelector = createFacilityDataSelector(retrieveAmenitiesForFacility);
export const servicesSelector = createFacilityDataSelector(retrieveServicesForFacility);