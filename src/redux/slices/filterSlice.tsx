import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  enteredKeyword: string;
  selectedFacilityTypes: string[];
  selectedAmenities: string[];
  selectedOfferings: string[];
  hasUpdated: boolean;
  isReset: boolean;
}

const initialFilterState: FilterState = {
  enteredKeyword: '',
  selectedFacilityTypes: [],
  selectedAmenities: [],
  selectedOfferings: [],
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
    setSelectedOfferings: (state, action: PayloadAction<string[]>) => {
      state.selectedOfferings = action.payload;
      state.hasUpdated = true;
    },
    signalUpdate: (state) => {
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
  setSelectedOfferings,
  signalUpdate,
  acknowledgeUpdate,
  resetAllFilters,
  unsetResetFlag,
} = filterSlice.actions;

export default filterSlice.reducer;
