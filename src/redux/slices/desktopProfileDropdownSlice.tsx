import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DesktopProfileDropdownState {
  isDesktopProfileDropdownOpen: boolean;
}

const initialState: DesktopProfileDropdownState = {
  isDesktopProfileDropdownOpen: false,
}

export const desktopProfileDropdownSlice = createSlice({
  name: 'isDesktopProfileDropdownOpen',
  initialState,
  reducers: {
    setIsDesktopProfileDropdownOpen: (state, action: PayloadAction<boolean>) => {
      state.isDesktopProfileDropdownOpen = action.payload;
    },
  },
});

export const { setIsDesktopProfileDropdownOpen } = desktopProfileDropdownSlice.actions;

export default desktopProfileDropdownSlice.reducer;

