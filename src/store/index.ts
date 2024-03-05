import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ShopsState } from "@/shops/types";
import { createShopsSlice } from "@/shops/slice/shopsSlice";
import { createTrucksSlice } from "@/trucks/slice/trucksSlice";
import { TrucksState } from "@/trucks/types";

export const useAppStore = create<ShopsState & TrucksState>()(
  devtools((...creators) => ({
    ...createShopsSlice(...creators),
    ...createTrucksSlice(...creators),
  }))
);
