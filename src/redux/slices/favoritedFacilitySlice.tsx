
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FavoritedFacility {
  id: number;
  userAccount: any;
  facility: any;
}

const initialState: FavoritedFacility[] = [];

const favoritedFacilitySlice = createSlice({
  name: 'favoritedFacility',
  initialState,
  reducers: {
    addFavoritedFacilityToState: (state, action: PayloadAction<FavoritedFacility>) => {
      if (!state.some(facility => facility.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    deleteFavoritedFacilityFromState: (state, action: PayloadAction<number>) => {
      return state.filter(facility => facility.id !== action.payload);
    },
  }
})

export const { addFavoritedFacilityToState, deleteFavoritedFacilityFromState } = favoritedFacilitySlice.actions;
export default favoritedFacilitySlice.reducer;



