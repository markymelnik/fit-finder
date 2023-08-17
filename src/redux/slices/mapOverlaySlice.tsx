import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface mapOverlaySliceState {
  isMapOverlayShown: boolean;
}

const initialState: mapOverlaySliceState = {
  isMapOverlayShown: false,
}

export const mapOverlaySlice = createSlice({
  name: 'isMapOverlayShown',
  initialState: initialState,
  reducers: {
    setIsMapOverlayShown: (state, action: PayloadAction<boolean>) => {
      state.isMapOverlayShown = action.payload;
    },
  },
});

export const { setIsMapOverlayShown } = mapOverlaySlice.actions;

export default mapOverlaySlice.reducer;
