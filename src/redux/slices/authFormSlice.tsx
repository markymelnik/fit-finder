import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthFormSlice {
  isAuthFormOpen: boolean;
  activeAuthTab: 'login' | 'signup';
}

const initialState: AuthFormSlice = {
  isAuthFormOpen: false,
  activeAuthTab: 'login',
}

export const authFormSlice = createSlice({
  name: 'authForm',
  initialState: initialState,
  reducers: {
    setIsAuthFormShown: (state, action: PayloadAction<boolean>) => {
      state.isAuthFormOpen = action.payload;
    },
    setActiveAuthTab: (state, action: PayloadAction<'login' | 'signup'>) => {
      state.activeAuthTab = action.payload;
    }
  },
});

export const { setIsAuthFormShown, setActiveAuthTab } = authFormSlice.actions;

export default authFormSlice.reducer;
