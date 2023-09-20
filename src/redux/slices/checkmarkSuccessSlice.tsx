import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckmarkSuccessState { 
  showCheckmark: boolean;
}

const initialState: CheckmarkSuccessState = {
  showCheckmark: false,
}

const checkmarkSuccessSlice = createSlice({
  name: 'checkmarkSuccess',
  initialState,
  reducers: {
    setShowCheckmark: (state, action: PayloadAction<boolean>) => {
      state.showCheckmark = action.payload;
    }
  }
})

export const { setShowCheckmark } = checkmarkSuccessSlice.actions;

export default checkmarkSuccessSlice.reducer;
