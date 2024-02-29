import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Shop, ShopsState } from "../types";

const initialShopsState: ShopsState = {
  list: [],
  featured: [],
};

const shopsSlice = createSlice({
  name: "shops",
  initialState: initialShopsState,
  reducers: {
    loadShops: (shopsState, action: PayloadAction<Shop[]>) => {
      shopsState.list = action.payload;
    },
    featureShop: (shopsState, action: PayloadAction<Shop["id"]>) => {
      const shopId = action.payload;

      const featuredShop = shopsState.featured.find(
        (shop) => shop.id === shopId
      );

      if (!featuredShop) {
        const shop = shopsState.list.find((shop) => shop.id === shopId)!;

        shopsState.featured.push(shop);

        return;
      }

      shopsState.featured = shopsState.featured.filter(
        (shop) => shop.id !== shopId
      );
    },
    incrementEmployees: (shopsState, action: PayloadAction<Shop["id"]>) => {
      const shop = shopsState.list.find((shop) => shop.id === action.payload)!;

      shop.employees++;
    },
    decrementEmployees: (shopsState, action: PayloadAction<Shop["id"]>) => {
      const shop = shopsState.list.find((shop) => shop.id === action.payload)!;

      shop.employees--;
    },
  },
});

export const {
  decrementEmployees,
  incrementEmployees,
  loadShops,
  featureShop,
} = shopsSlice.actions;
export const shopsReducer = shopsSlice.reducer;
