import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface mobileMenuSliceState {
  isMobileMenuOpen: boolean;
}

const initialState: mobileMenuSliceState = {
  isMobileMenuOpen: false,
}

export const mobileMenuSlice = createSlice({
  name: 'isMobileMenuOpen',
  initialState: initialState,
  reducers: {
    setIsMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export const { setIsMobileMenuOpen } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
