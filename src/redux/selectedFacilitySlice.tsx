import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Facility {
  name: String;
  type: String;
  address: String;
}

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