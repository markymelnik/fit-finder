import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountMenuSliceState {
  isAccountMenuOpen: boolean;
}

const initialState: AccountMenuSliceState = {
  isAccountMenuOpen: false,
}

export const accountMenuSlice = createSlice({
  name: 'isAccountMenuOpen',
  initialState,
  reducers: {
    setIsAccountMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isAccountMenuOpen = action.payload;
    },
  },
});

export const { setIsAccountMenuOpen } = accountMenuSlice.actions;

export default accountMenuSlice.reducer;

