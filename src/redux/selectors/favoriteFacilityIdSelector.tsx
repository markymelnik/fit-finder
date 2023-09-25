import { createSelector } from "reselect";

import { RootState } from "../store";

const getFavoritedFacility = (state: RootState) => state.favoritedFacility;

export const favoritedFacilityIdSelector = createSelector(
  [getFavoritedFacility],
  (favoritedFacility) => {
    return favoritedFacility.map(facility => facility.facility.id);
  }
)