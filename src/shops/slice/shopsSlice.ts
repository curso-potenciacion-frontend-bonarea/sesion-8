import { ShopsState } from "../types";

import { Shop } from "@/shops/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialShopsState: ShopsState = {
  list: [],
  featured: [],
};

const shopsSlice = createSlice({
  name: "shops",
  initialState: initialShopsState,
  reducers: {
    loadShops: (shopsState, action: PayloadAction<Shop[]>): ShopsState => ({
      ...shopsState,
      list: action.payload,
    }),
    toggleFeaturedShop: (
      shopsState,
      action: PayloadAction<Shop["id"]>
    ): ShopsState => {
      const id = action.payload;
      const featured = shopsState.featured;
      const isFeatured = featured.some((shop) => shop.id === id);
      const featuredWithoutThis = featured.filter((shop) => shop.id !== id);
      const thisShop = shopsState.list.find((shop) => shop.id === id);

      const newShopsState: ShopsState = {
        ...shopsState,
        featured: isFeatured
          ? featuredWithoutThis
          : thisShop
          ? [...featured, thisShop]
          : featured,
      };

      return newShopsState;
    },
    incrementShopEmployees: (
      shopsState,
      action: PayloadAction<Shop["id"]>
    ): ShopsState => ({
      ...shopsState,
      list: shopsState.list.map((shop) => ({
        ...shop,
        employees:
          shop.id === action.payload ? shop.employees + 1 : shop.employees,
      })),
    }),
    decrementShopEmployees: (shopsState, action: PayloadAction<Shop["id"]>) => {
      const shopToDecrement = shopsState.list.find(
        (shop) => shop.id === action.payload
      )!;

      shopToDecrement.employees--;
    },
  },
});

export const {
  loadShops,
  toggleFeaturedShop,
  incrementShopEmployees,
  decrementShopEmployees,
} = shopsSlice.actions;
export const shopsReducer = shopsSlice.reducer;
