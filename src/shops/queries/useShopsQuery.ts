import { useQuery } from "@tanstack/react-query";
import { Shop } from "../types";

export const useShopsQuery = (page: number) => {
  return useQuery({
    queryKey: ["shops", page],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/shops?page=${page}`
      );
      return response.json() as Promise<{ shops: Shop[] }>;
    },
    staleTime: 5000,
  });
};
