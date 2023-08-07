import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FacilityState {
  facilities: any[];
  error: string | null;
}

const initialState: FacilityState = {
  facilities: [],
  error: null,
};

export const facilitiesSlice = createSlice({
  name: 'facilities',
  initialState: initialState,
  reducers: {
    setFacilities: (state, action: PayloadAction<any[]>) => {
      state.facilities = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setFacilities, setError } = facilitiesSlice.actions;

export default facilitiesSlice.reducer;
