import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Amenity } from "./types";

interface AmenityState {
  byIds: Record<number, Amenity>
  allIds: number[];
}

const initialAmenitiesState: AmenityState = {
  byIds: {},
  allIds: [],
}

const amenitySlice = createSlice({
  name: 'amenities',
  initialState: initialAmenitiesState,
  reducers: {
    setAmenities: (state, action: PayloadAction<Amenity[]>) => {
      state.byIds = {};
      state.allIds = [];
      action.payload.forEach((amenity) => {
        state.byIds[amenity.id] = amenity;
        state.allIds.push(amenity.id);
      });
    },
  },
});

export const { setAmenities } = amenitySlice.actions;

export default amenitySlice.reducer;