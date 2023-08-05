import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationsState {
  locations: any[];
  error: string | null;
}

const initialState: LocationsState = {
  locations: [],
  error: null,
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<any[]>) => {
      state.locations = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLocations, setError } = locationsSlice.actions;

export default locationsSlice.reducer;
