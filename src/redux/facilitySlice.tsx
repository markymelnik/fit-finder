import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Facility, Amenity } from './types';

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
    setFacilities: (state, action: PayloadAction<any[]>) => {
      state.byIds = {};
      state.allIds = [];
      action.payload.forEach((facility) => {
        state.byIds[facility.id] = facility;
        state.allIds.push(facility.id);
      });
    },
  },
});

export const retrieveAmenitiesForFacility = (state: RootState, facilityId: number): Amenity[] => {
  const facility = state.facilities.byIds[facilityId];
  if (facility) {
    return facility.amenities.map((amenityId) => state.amenities.byIds[amenityId]);
  }
  return [];
}

export const { setFacilities } = facilitiesSlice.actions;

export default facilitiesSlice.reducer;
