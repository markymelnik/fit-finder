import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface FavoritedFacility {
  id: number;
  userAccount: any;
  facility: any;
}

interface FavoritedFacilityState {
  favoritedFacilities: FavoritedFacility[];
  favoriteCap: number;
}

const initialState: FavoritedFacilityState = {
  favoritedFacilities: [],
  favoriteCap: 10
}

const favoritedFacilitySlice = createSlice({
  name: 'favoritedFacility',
  initialState,
  reducers: {
    addFavoritedFacilityToState: (state, action: PayloadAction<FavoritedFacility>) => {
      if (state.favoritedFacilities.length < state.favoriteCap) {
        if (!state.favoritedFacilities.some(facility => facility.id === action.payload.id)) {
          state.favoritedFacilities.push(action.payload);
        }
      }
      
    },
    deleteFavoritedFacilityFromState: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        favoritedFacilities: state.favoritedFacilities.filter(facility => facility.id !== action.payload)
      };
    },
  }
})

export const { addFavoritedFacilityToState, deleteFavoritedFacilityFromState } = favoritedFacilitySlice.actions;
export default favoritedFacilitySlice.reducer;

export const selectFavoriteCount = (state: RootState) => state.favoritedFacility.favoritedFacilities.length;
export const selectFavoriteCap = (state: RootState) => state.favoritedFacility.favoriteCap;
