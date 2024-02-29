import Heading from "@/shared/components/Heading";
import FeaturedShops from "@/shops/components/FeaturedShops";
import ShopsFilters from "@/shops/components/ShopsFilters";
import ShopsPagination from "@/shops/components/ShopsPagination";
import ShopsTable from "@/shops/components/ShopsTable";
import ShopsListProvider from "@/shops/context/ShopsListProvider";
import { loadShops } from "@/shops/slice/shopsSlice";
import { Shop } from "@/shops/types";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

const ShopsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/shops`)
      .then((response) => response.json() as Promise<{ shops: Shop[] }>)
      .then(({ shops }) => {
        dispatch(loadShops(shops));
      });
  }, [dispatch]);

  return (
    <>
      <Heading level={2}>Shops list</Heading>
      <FeaturedShops />
      <ShopsListProvider>
        <ShopsFilters />
        <ShopsPagination />
        <ShopsTable />
      </ShopsListProvider>
    </>
  );
};

export default ShopsListPage;
