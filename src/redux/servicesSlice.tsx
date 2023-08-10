import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Service } from "./types";

interface ServicesState {
  byIds: Record<number, Service>
  allIds: number[];
}

const initialServicesState: ServicesState = {
  byIds: {},
  allIds: [],
}

const servicesSlice = createSlice({
  name: 'services',
  initialState: initialServicesState,
  reducers: {
    setServices: (state, action: PayloadAction<Service[]>) => {
      state.byIds = {};
      state.allIds = [];
      action.payload.forEach((service) => {
        state.byIds[service.id] = service;
        state.allIds.push(service.id);
      });
    },
  },
});

export const { setServices } = servicesSlice.actions;

export default servicesSlice.reducer;