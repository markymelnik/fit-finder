import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  enteredKeyword: string;
  selectedFacilityTypes: string[];
  selectedAmenities: string[];
  selectedServices: string[];
}

const initialFilterState: FilterState = {
  enteredKeyword: '',
  selectedFacilityTypes: [],
  selectedAmenities: [],
  selectedServices: [],
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setEnteredKeyword: (state, action: PayloadAction<string>) => {
      state.enteredKeyword = action.payload;
    },
    setSelectedFacilityTypes: (state, action: PayloadAction<string[]>) => {
      state.selectedFacilityTypes = action.payload;
    },
    setSelectedAmenities: (state, action: PayloadAction<string[]>) => {
      state.selectedAmenities = action.payload;
    },
    setSelectedServices: (state, action: PayloadAction<string[]>) => {
      state.selectedServices = action.payload;
    },
    resetAllFilters: (_state) => {
      return initialFilterState;
    },
  }
});

export const {
  setEnteredKeyword,
  setSelectedFacilityTypes,
  setSelectedAmenities,
  setSelectedServices,
  resetAllFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
