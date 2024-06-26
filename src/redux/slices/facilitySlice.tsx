import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Facility } from '../../types/types';

interface FacilityState {
  byIds: Record<number, Facility>;
  allIds: number[];
  byAllFacilityIds: Record<number, Facility>
  allFacilityIds: number[];
  isLoading: boolean;
}

const initialFacilityState: FacilityState = {
  byIds: {},
  allIds: [],
  byAllFacilityIds: {},
  allFacilityIds: [],
  isLoading: false,
};

export const facilitiesSlice = createSlice({
  name: 'facilities',
  initialState: initialFacilityState,
  reducers: {
    startFetching: (state) => {
      state.isLoading = true;
    },
    setPaginatedFacilities: (state, action: PayloadAction<Facility[]>) => {
      state.byIds = {};
      state.allIds = [];
      action.payload.forEach((facility) => {
        state.byIds[facility.id] = facility;
        state.allIds.push(facility.id);
      });
      state.isLoading = false;
    },
    setAllFacilities: (state, action: PayloadAction<Facility[]>) => {
      state.byAllFacilityIds = {};
      state.allFacilityIds = [];
      action.payload.forEach((facility) => {
        state.byAllFacilityIds[facility.id] = facility;
        state.allFacilityIds.push(facility.id);
      });
      state.isLoading = false;
    },
  },
});

export const { setPaginatedFacilities, setAllFacilities, startFetching } = facilitiesSlice.actions;

export default facilitiesSlice.reducer;
