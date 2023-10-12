import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Facility } from "../../types/types";

interface selectedFacilityState {
  facilityData: Facility | null;
}

const initialState: selectedFacilityState = {
  facilityData: null,
}

export const selectedFacilitySlice = createSlice({
  name: 'selectedFacility',
  initialState: initialState,
  reducers: {
    setSelectedFacility: (state, action: PayloadAction<Facility>) => {
      state.facilityData = action.payload;
    },
  },
});

export const { setSelectedFacility } = selectedFacilitySlice.actions;

export default selectedFacilitySlice.reducer;