import { createSlice } from '@reduxjs/toolkit';

export const mobileSlice = createSlice({
  name: 'isMobile',
  initialState: window.innerWidth < 768,
  reducers: {
    setIsMobile: (state, action) => action.payload,
  },
});

export const { setIsMobile } = mobileSlice.actions;

export default mobileSlice.reducer;
