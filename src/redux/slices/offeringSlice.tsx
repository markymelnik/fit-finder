import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Offering } from "../../types/types";

interface OfferingState {
  byIds: Record<number, Offering>
  allIds: number[];
}

const initialOfferingsState: OfferingState = {
  byIds: {},
  allIds: [],
}

const offeringSlice = createSlice({
  name: 'offerings',
  initialState: initialOfferingsState,
  reducers: {
    setOfferings: (state, action: PayloadAction<Offering[]>) => {
      state.byIds = {};
      state.allIds = [];
      action.payload.forEach((offering) => {
        state.byIds[offering.id] = offering;
        state.allIds.push(offering.id);
      });
    },
  },
});

export const { setOfferings } = offeringSlice.actions;

export default offeringSlice.reducer;