import Heading from "@/shared/components/Heading";
import FeaturedShops from "@/shops/components/FeaturedShops";
import ShopsFilters from "@/shops/components/ShopsFilters";
import ShopsPagination from "@/shops/components/ShopsPagination";
import ShopsTable from "@/shops/components/ShopsTable";
import { ShopsListContext } from "@/shops/context/ShopsListContext";
import { useShopsQuery } from "@/shops/queries/useShopsQuery";
import { useAppStore } from "@/store";
import { useContext, useEffect } from "react";

const ShopsListPage = (): React.ReactElement => {
  const loadShops = useAppStore((state) => state.shops.loadShops);
  const { page } = useContext(ShopsListContext);
  const { data, isSuccess } = useShopsQuery(page);

  useEffect(() => {
    if (isSuccess) {
      loadShops(data.shops);
    }
  }, [data?.shops, loadShops, isSuccess]);

  return (
    <>
      <Heading level={2}>Shops list</Heading>
      <FeaturedShops />
      <ShopsFilters />
      <ShopsPagination />
      <ShopsTable />
    </>
  );
};

export default ShopsListPage;
