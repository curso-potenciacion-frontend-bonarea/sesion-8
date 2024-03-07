import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Truck, TrucksState } from "../types";

const initialTrucksState: TrucksState = {
  list: [],
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState: initialTrucksState,
  reducers: {
    loadTrucks: (trucksState, action: PayloadAction<Truck[]>): TrucksState => ({
      ...trucksState,
      list: action.payload,
    }),
  },
});

export const { loadTrucks } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;
