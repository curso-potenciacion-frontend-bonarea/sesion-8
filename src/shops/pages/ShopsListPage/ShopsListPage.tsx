import Heading from "@/shared/components/Heading";
import FeaturedShops from "@/shops/components/FeaturedShops";
import ShopsFilters from "@/shops/components/ShopsFilters";
import ShopsPagination from "@/shops/components/ShopsPagination";
import ShopsTable from "@/shops/components/ShopsTable";
import ShopsListProvider from "@/shops/context/ShopsListProvider";
import { Shop } from "@/shops/types";
import { useAppStore } from "@/store";
import { useEffect } from "react";

const ShopsListPage = (): React.ReactElement => {
  const loadShops = useAppStore((state) => state.shops.loadShops);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/shops`)
      .then((response) => response.json() as Promise<{ shops: Shop[] }>)
      .then(({ shops }) => {
        loadShops(shops);
      });
  }, [loadShops]);

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
