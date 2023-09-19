import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({ 
  name: 'loading',
  initialState: 0,
  reducers: {
    startLoading: (state) => state + 1,
    stopLoading: (state) => state - 1
  }
});

export const { startLoading, stopLoading } = loadingSlice.actions;

export default loadingSlice.reducer;