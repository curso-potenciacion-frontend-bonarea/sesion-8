import { StateCreator } from "zustand";
import { TrucksState } from "../types";
import { produce } from "immer";

export const createTrucksSlice: StateCreator<TrucksState> = (set) => ({
  trucks: {
    list: [],
    loadTrucks: (trucks) =>
      set(
        produce((state: TrucksState) => {
          state.trucks.list = trucks;
        })
      ),
  },
});
