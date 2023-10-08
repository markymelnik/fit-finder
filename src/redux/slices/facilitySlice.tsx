import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Facility } from '../../types/types';

interface FacilityState {
  byIds: Record<number, Facility>;
  allIds: number[];
  isLoading: boolean;
}

const initialFacilityState: FacilityState = {
  byIds: {},
  allIds: [],
  isLoading: false,
};

export const facilitiesSlice = createSlice({
  name: 'facilities',
  initialState: initialFacilityState,
  reducers: {
    startFetching: (state) => {
      state.isLoading = true;
    },
    setFacilities: (state, action: PayloadAction<Facility[]>) => {
      state.byIds = {};
      state.allIds = [];
      action.payload.forEach((facility) => {
        state.byIds[facility.id] = facility;
        state.allIds.push(facility.id);
      });
      state.isLoading = false;
    },
  },
});

export const retrieveAmenitiesForFacility = (facilities: FacilityState, facilityId: number): string[] => {
  const facility = facilities.byIds[facilityId];
  if (facility) {
    return facility.amenities.map(amenity => amenity.name);
  }
  return [];
};

export const retrieveOfferingsForFacility = (facilities: FacilityState, facilityId: number): string[] => {
  const facility = facilities.byIds[facilityId];
  if (facility) {
    return facility.offerings.map(offering => offering.name);
  }
  return [];
};

export const { setFacilities, startFetching } = facilitiesSlice.actions;

export default facilitiesSlice.reducer;
