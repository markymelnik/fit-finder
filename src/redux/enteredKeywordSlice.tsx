import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface EnteredKeywordState {
  enteredKeyword: string;
}

const initialState: EnteredKeywordState = {
  enteredKeyword: '',
};

export const enteredKeywordSlice = createSlice({
  name: 'enteredKeyword',
  initialState: initialState,
  reducers: {
    setEnteredKeyword: (state, action: PayloadAction<string>) => {
      state.enteredKeyword = action.payload;
    },
  },
});

export const { setEnteredKeyword } = enteredKeywordSlice.actions;

export default enteredKeywordSlice.reducer;
