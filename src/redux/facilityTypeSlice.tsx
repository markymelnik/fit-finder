import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FacilityType } from "./types";

interface FacilityTypeState {
  byIds: Record<number, FacilityType>
  allIds: number[];
}

const initialFacilityTypeState: FacilityTypeState = {
  byIds: {},
  allIds: [],
}

const facilityTypeSlice = createSlice({
  name: 'facility types',
  initialState: initialFacilityTypeState,
  reducers: {
    setFacilityTypes: (state, action: PayloadAction<FacilityType[]>) => {
      state.byIds = {};
      state.allIds = [];
      action.payload.forEach((facilityType) => {
        state.byIds[facilityType.id] = facilityType;
        state.allIds.push(facilityType.id);
      });
    },
  },
});

export const { setFacilityTypes } = facilityTypeSlice.actions;

export default facilityTypeSlice.reducer;