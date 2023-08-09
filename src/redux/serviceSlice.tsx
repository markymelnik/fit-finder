import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Service } from "./types";

interface ServiceState {
  byIds: Record<number, Service>
  allIds: number[];
}

const initialServicesState: ServiceState = {
  byIds: {},
  allIds: [],
}

const serviceSlice = createSlice({
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

export const { setServices } = serviceSlice.actions;

export default serviceSlice.reducer;