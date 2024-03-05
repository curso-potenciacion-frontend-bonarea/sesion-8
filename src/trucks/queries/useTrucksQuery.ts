import { useQuery } from "@tanstack/react-query";
import { Truck } from "../types";

export const useTrucksQuery = () => {
  return useQuery({
    queryKey: ["trucks"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/trucks`);
      return response.json() as Promise<{ trucks: Truck[] }>;
    },
    staleTime: 10000,
  });
};
