import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface mobileSliceState {
  isMobile: boolean;
}

const initialState: mobileSliceState = {
  isMobile: window.innerWidth < 768,
};

export const mobileSlice = createSlice({
  name: 'isMobile',
  initialState: initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = mobileSlice.actions;

export default mobileSlice.reducer;
