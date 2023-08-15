import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Facility } from '../types';

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

export const getFacilityCount = (state: { facilities: FacilityState}): number => {
  return state.facilities.allIds.length;
}

export const retrieveAmenitiesForFacility = (facilities: FacilityState, facilityId: number): string[] => {
  const facility = facilities.byIds[facilityId];
  if (facility) {
    return facility.amenities.map(amenity => amenity.name);
  }
  return [];
};

export const retrieveServicesForFacility = (facilities: FacilityState, facilityId: number): string[] => {
  const facility = facilities.byIds[facilityId];
  if (facility) {
    return facility.services.map(service => service.name);
  }
  return [];
};

export const { setFacilities } = facilitiesSlice.actions;

export default facilitiesSlice.reducer;
