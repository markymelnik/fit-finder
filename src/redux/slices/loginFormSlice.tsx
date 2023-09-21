import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginSliceState {
  isLoginFormShown: boolean;
  activeTab: 'login' | 'signup';
}

const initialState: LoginSliceState = {
  isLoginFormShown: false,
  activeTab: 'login',
}

export const loginFormSlice = createSlice({
  name: 'isLoginFormShown',
  initialState: initialState,
  reducers: {
    setIsLoginFormShown: (state, action: PayloadAction<boolean>) => {
      state.isLoginFormShown = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<'login' | 'signup'>) => {
      state.activeTab = action.payload;
    }
  },
});

export const { setIsLoginFormShown, setActiveTab } = loginFormSlice.actions;

export default loginFormSlice.reducer;
