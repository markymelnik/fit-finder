import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface mobileFilterSliceState {
  isMobileFilterOpen: boolean;
}

const initialState: mobileFilterSliceState = {
  isMobileFilterOpen: false,
}

export const mobileFilterSlice = createSlice({
  name: 'isMobileFilterOpen',
  initialState: initialState,
  reducers: {
    setIsMobileFilterOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileFilterOpen = action.payload;
    },
  },
});

export const { setIsMobileFilterOpen } = mobileFilterSlice.actions;

export default mobileFilterSlice.reducer;
