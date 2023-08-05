import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchTermState {
  searchTerm: string;
}

const initialState: SearchTermState = {
  searchTerm: '',
};

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;
