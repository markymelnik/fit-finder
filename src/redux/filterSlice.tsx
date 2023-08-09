import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedAmenities: string[];
  selectedServices: string[];
}

const initialFilterState: FilterState = {
  selectedAmenities: [],
  selectedServices: [],
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
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

export const { setSelectedAmenities, setSelectedServices } = filterSlice.actions;

export default filterSlice.reducer;