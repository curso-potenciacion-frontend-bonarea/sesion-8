import { StateCreator } from "zustand";
import { produce } from "immer";
import { ShopsState } from "../types";

export const createShopsSlice: StateCreator<ShopsState> = (set) => ({
  shops: {
    list: [],
    featured: [],
    loadShops: (shops) =>
      set(
        produce((state: ShopsState) => {
          state.shops.list = shops;
        })
      ),
    featureShop: (shopId) =>
      set(
        produce((state: ShopsState) => {
          if (state.shops.featured.some((shop) => shop.id === shopId)) {
            state.shops.featured = state.shops.featured.filter(
              (shop) => shop.id !== shopId
            );
            return;
          }

          const shop = state.shops.list.find((shop) => shop.id === shopId);

          if (!shop) {
            return;
          }

          state.shops.featured.push(shop);
        })
      ),
    incrementEmployees: (shopId) =>
      set(
        produce((state: ShopsState) => {
          const shop = state.shops.list.find((shop) => shop.id === shopId);

          if (!shop) {
            return;
          }

          shop.employees++;
        })
      ),
    decrementEmployees: (shopId) =>
      set(
        produce((state: ShopsState) => {
          const shop = state.shops.list.find((shop) => shop.id === shopId);

          if (!shop) {
            return;
          }

          shop.employees--;
        })
      ),
  },
});
