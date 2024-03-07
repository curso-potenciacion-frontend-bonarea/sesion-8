import { useMutation } from "@tanstack/react-query";
import { Shop } from "../types";
import { useAppDispatch } from "@/store/hooks";
import { deleteShop } from "../slice/shopsSlice";

export const useShopsDeleteMutation = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (shopId: Shop["id"]) => {
      return fetch(`${import.meta.env.VITE_API_URL}/shops/${shopId}`, {
        method: "DELETE",
      });
    },
    onSuccess: (_data, shopId) => {
      dispatch(deleteShop(shopId));
    },
  });
};
