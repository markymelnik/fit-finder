import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ViewportSliceState {
  isMobile: boolean;
}

const initialState: ViewportSliceState = {
  isMobile: window.innerWidth < 768,
};

export const viewportSlice = createSlice({
  name: 'viewport',
  initialState: initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = viewportSlice.actions;

export default viewportSlice.reducer;
