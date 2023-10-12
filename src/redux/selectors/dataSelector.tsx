import { createSelector } from "reselect";

import { RootState } from "../store";

const selectedFacility = (state: RootState) => state.selectedFacility?.facilityData;

const createFacilityDataSelector = (attributeKey: 'offerings' | 'amenities') => {
  return createSelector(
    selectedFacility,
    (selectedFacility) => {
      if (selectedFacility && attributeKey in selectedFacility) {
        return selectedFacility[attributeKey].map((item: any) => item.name);
      }
      return [];
    }
  );
};

export const offeringsSelector = createFacilityDataSelector("offerings");
export const amenitiesSelector = createFacilityDataSelector("amenities");
