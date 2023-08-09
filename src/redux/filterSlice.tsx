import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedAmenities: string[];
}

const initialFilterState: FilterState = {
  selectedAmenities: [],
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setSelectedAmenities: (state, action: PayloadAction<string[]>) => {
      state.selectedAmenities = action.payload;
      console.log("In the reducer: ", action.payload);
    }
  }
});

export const { setSelectedAmenities } = filterSlice.actions;

export default filterSlice.reducer;