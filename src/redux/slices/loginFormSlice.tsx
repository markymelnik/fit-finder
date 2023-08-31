import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginSliceState {
  isLoginFormShown: boolean;
}

const initialState: LoginSliceState = {
  isLoginFormShown: false,
}

export const loginFormSlice = createSlice({
  name: 'isLoginFormShown',
  initialState: initialState,
  reducers: {
    setIsLoginFormShown: (state, action: PayloadAction<boolean>) => {
      state.isLoginFormShown = action.payload;
    },
  },
});

export const { setIsLoginFormShown } = loginFormSlice.actions;

export default loginFormSlice.reducer;
