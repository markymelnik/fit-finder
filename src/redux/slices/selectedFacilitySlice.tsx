import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Facility } from "../../types/types";

interface selectedFacilityState {
  selectedFacility: Facility | null;
}

const initialState: selectedFacilityState = {
  selectedFacility: null,
}

export const selectedFacilitySlice = createSlice({
  name: 'selectedFacility',
  initialState: initialState,
  reducers: {
    setSelectedFacility: (state, action: PayloadAction<Facility>) => {
      state.selectedFacility = action.payload;
    },
  },
});

export const { setSelectedFacility } = selectedFacilitySlice.actions;

export default selectedFacilitySlice.reducer;