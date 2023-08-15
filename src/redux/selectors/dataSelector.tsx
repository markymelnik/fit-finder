import { createSelector } from "reselect";
import { RootState } from "../store";
import { retrieveAmenitiesForFacility, retrieveServicesForFacility } from "../slices/facilitySlice";

const getSelectedFacility = (state: RootState) => state.selectedFacility?.selectedFacility;
const getFacilities = (state: RootState) => state.facilities;

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