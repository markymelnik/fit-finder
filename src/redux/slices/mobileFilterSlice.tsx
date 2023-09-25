import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MobileFilterSliceState {
  isMobileFilterOpen: boolean;
}

const initialState: MobileFilterSliceState = {
  isMobileFilterOpen: false,
}

export const mobileFilterSlice = createSlice({
  name: 'mobileFilterSlice',
  initialState: initialState,
  reducers: {
    setIsMobileFilterOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileFilterOpen = action.payload;
    },
  },
});

export const { setIsMobileFilterOpen } = mobileFilterSlice.actions;

export default mobileFilterSlice.reducer;
