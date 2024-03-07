import { render, screen } from "@testing-library/react";
import ShopsFilters from ".";
import {
  ShopsListContext,
  ShopsListContextValue,
} from "@/shops/context/ShopsListContext";

describe("Given a ShopsFilters component", () => {
  const shopsContextValue: Pick<
    ShopsListContextValue,
    "filterSize" | "setFilterSize"
  > = {
    filterSize: "xl",
    setFilterSize: () => {},
  };

  describe("When it renders", () => {
    test("Then it should show a select labelled by 'Filter by size: '", () => {
      const label = /^filter by size/i;

      render(
        <ShopsListContext.Provider
          value={shopsContextValue as ShopsListContextValue}
        >
          <ShopsFilters />
        </ShopsListContext.Provider>
      );

      const select = screen.getByLabelText(label);

      expect(select).toBeInTheDocument();
    });
  });

  describe("When it receives a filter size 'xl'", () => {
    test("Then it should show a select with value 'xl'", () => {
      render(
        <ShopsListContext.Provider
          value={shopsContextValue as ShopsListContextValue}
        >
          <ShopsFilters />
        </ShopsListContext.Provider>
      );

      const select = screen.getByDisplayValue(shopsContextValue.filterSize);

      expect(select).toBeInTheDocument();
    });
  });
});
