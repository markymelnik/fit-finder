import { createSelector } from "reselect";
import { RootState } from "../store";
import { retrieveServicesForFacility } from "../facilitySlice";

const getSelectedFacility = (state: RootState) => state.selectedFacility?.selectedFacility;
const getFacilities = (state: RootState) => state.facilities;

export const servicesSelector = createSelector(
  [getSelectedFacility, getFacilities],
  (selectedFacility, facilities) => {
    if (selectedFacility) {
      return retrieveServicesForFacility(facilities, selectedFacility.id);
    }
    return [];
  }
);