import { render, screen } from "@testing-library/react";
import ShopsTable from ".";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { shopsReducer } from "@/shops/slice/shopsSlice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createShops } from "@/shops/factories/shopsFactory";

const queryClient = new QueryClient();

const shops = createShops(2);

describe("Given a ShopsTable component", () => {
  describe("When it receives two shops", () => {
    test("Then it should show its two names", () => {
      const store = configureStore({
        reducer: {
          shops: shopsReducer,
        },
        preloadedState: {
          shops: {
            featured: [],
            list: shops,
          },
        },
      });

      render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <ShopsTable />
          </Provider>
        </QueryClientProvider>
      );

      shops.forEach((shop) => {
        const shopName = screen.getByText(shop.name);

        expect(shopName).toBeInTheDocument();
      });
    });
  });
});
