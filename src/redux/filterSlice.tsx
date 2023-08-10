import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedFacilityTypes: string[];
  selectedAmenities: string[];
  selectedServices: string[];
}

const initialFilterState: FilterState = {
  selectedFacilityTypes: [],
  selectedAmenities: [],
  selectedServices: [],
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setSelectedFacilityTypes: (state, action: PayloadAction<string[]>) => {
      state.selectedFacilityTypes = action.payload;
      console.log("In the reducer: ", action.payload);
    },
    setSelectedAmenities: (state, action: PayloadAction<string[]>) => {
      state.selectedAmenities = action.payload;
      console.log("In the reducer: ", action.payload);
    },
    setSelectedServices: (state, action: PayloadAction<string[]>) => {
      state.selectedServices = action.payload;
      console.log("In the reducer: ", action.payload);
    }
  }
});

export const {
  setSelectedFacilityTypes,
  setSelectedAmenities,
  setSelectedServices,
} = filterSlice.actions;

export default filterSlice.reducer;