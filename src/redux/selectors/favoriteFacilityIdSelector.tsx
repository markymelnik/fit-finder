import { createSelector } from "reselect";

import { RootState } from "../store";

const getFavoritedFacility = (state: RootState) => state.favoritedFacility;

export const favoritedFacilityIdSelector = createSelector(
  [getFavoritedFacility],
  (favoritedFacility) => {
    return favoritedFacility.favoritedFacilities.map(facility => facility.facility.id);
  }
)