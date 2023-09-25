import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  enteredKeyword: string;
  selectedFacilityTypes: string[];
  selectedAmenities: string[];
  selectedServices: string[];
  hasUpdated: boolean;
  isReset: boolean;
}

const initialFilterState: FilterState = {
  enteredKeyword: '',
  selectedFacilityTypes: [],
  selectedAmenities: [],
  selectedServices: [],
  hasUpdated: false,
  isReset: false,
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
      state.hasUpdated = true;
    },
    setSelectedAmenities: (state, action: PayloadAction<string[]>) => {
      state.selectedAmenities = action.payload;
      state.hasUpdated = true;
    },
    setSelectedServices: (state, action: PayloadAction<string[]>) => {
      state.selectedServices = action.payload;
      state.hasUpdated = true;
    },
    acknowledgeUpdate: (state) => {
      state.hasUpdated = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetAllFilters: (_state) => {
      return {
        ...initialFilterState,
        isReset: true
      }
    },
    unsetResetFlag: (state) => {
      state.isReset = false;
    }
  }
});

export const {
  setEnteredKeyword,
  setSelectedFacilityTypes,
  setSelectedAmenities,
  setSelectedServices,
  acknowledgeUpdate,
  resetAllFilters,
  unsetResetFlag,
} = filterSlice.actions;

export default filterSlice.reducer;
