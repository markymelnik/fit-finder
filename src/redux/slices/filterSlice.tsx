import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  enteredKeyword: string;
  selectedFacilityTypes: string[];
  selectedAmenities: string[];
  selectedOfferings: string[];
  isReset: boolean;
}

const initialFilterState: FilterState = {
  enteredKeyword: '',
  selectedFacilityTypes: [],
  selectedAmenities: [],
  selectedOfferings: [],
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
    },
    setSelectedAmenities: (state, action: PayloadAction<string[]>) => {
      state.selectedAmenities = action.payload;
    },
    setSelectedOfferings: (state, action: PayloadAction<string[]>) => {
      state.selectedOfferings = action.payload;
    },
    resetSelectedFacilityTypes: (state) => {
      state.selectedFacilityTypes = initialFilterState.selectedFacilityTypes;
    },
    resetSelectedAmenities: (state) => {
      state.selectedAmenities = initialFilterState.selectedAmenities;
    },
    resetSelectedOfferings: (state) => {
      state.selectedOfferings = initialFilterState.selectedOfferings;
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
  resetSelectedFacilityTypes,
  resetSelectedAmenities,
  resetSelectedOfferings,
  resetAllFilters,
  unsetResetFlag,
} = filterSlice.actions;

export default filterSlice.reducer;
