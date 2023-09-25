import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SidebarMenuSliceState {
  isSidebarMenuOpen: boolean;
}

const initialState: SidebarMenuSliceState = {
  isSidebarMenuOpen: false,
}

export const sidebarMenuSlice = createSlice({
  name: 'isSidebarMenuOpen',
  initialState: initialState,
  reducers: {
    setIsSidebarMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarMenuOpen = action.payload;
    },
  },
});

export const { setIsSidebarMenuOpen } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
