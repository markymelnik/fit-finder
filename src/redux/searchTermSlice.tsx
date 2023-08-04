import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;
