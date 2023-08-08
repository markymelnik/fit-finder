import { createSelector } from "reselect";
import { RootState } from "../store";
import { retrieveAmenitiesForFacility } from "../facilitySlice";

const getSelectedFacility = (state: RootState) => state.selectedFacility?.selectedFacility;
const getFacilities = (state: RootState) => state.facilities;

export const amenitiesSelector = createSelector(
  [getSelectedFacility, getFacilities],
  (selectedFacility, facilities) => {
    if (selectedFacility) {
      return retrieveAmenitiesForFacility(facilities, selectedFacility.id);
    }
    return [];
  }
);