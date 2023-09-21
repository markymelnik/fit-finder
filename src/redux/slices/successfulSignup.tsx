import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SuccessfulSignupState {
  isSuccessfulSignupShown: boolean;
}

const initialState: SuccessfulSignupState = {
  isSuccessfulSignupShown: false,
}

export const successfulSignupSlice = createSlice({
  name: 'isSuccessfulSignupOpen',
  initialState,
  reducers: {
    setIsSuccessfulSignupShown: (state, action: PayloadAction<boolean>) => {
      state.isSuccessfulSignupShown = action.payload;
    }
  }
})

export const { setIsSuccessfulSignupShown } = successfulSignupSlice.actions;

export default successfulSignupSlice.reducer;

