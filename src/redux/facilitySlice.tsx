import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Facility } from './types';

interface FacilityState {
  byIds: Record<number, Facility>;
  allIds: number[];
}

const initialFacilityState: FacilityState = {
  byIds: {},
  allIds: [],
};

export const facilitiesSlice = createSlice({
  name: 'facilities',
  initialState: initialFacilityState,
  reducers: {
    setFacilities: (state, action: PayloadAction<Facility[]>) => {
      state.byIds = {};
      state.allIds = [];
      action.payload.forEach((facility) => {
        state.byIds[facility.id] = facility;
        state.allIds.push(facility.id);
      });
    },
  },
});

export const retrieveAmenitiesForFacility = (facilities: FacilityState, facilityId: number): string[] => {
  const facility = facilities.byIds[facilityId];
  if (facility) {
    return facility.amenities.map(facility => facility.name);
  }
  return [];
}

export const { setFacilities } = facilitiesSlice.actions;

export default facilitiesSlice.reducer;
