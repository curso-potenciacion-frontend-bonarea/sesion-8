import { createContext } from "react";

export type ShopsListContextValue = {
  filterSize: "" | "sm" | "xl";
  setFilterSize: React.Dispatch<React.SetStateAction<"" | "sm" | "xl">>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const ShopsListContext = createContext({} as ShopsListContextValue);
