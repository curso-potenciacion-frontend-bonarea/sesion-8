import Heading from "@/shared/components/Heading";
import FeaturedShops from "@/shops/components/FeaturedShops";
import ShopsFilters from "@/shops/components/ShopsFilters";
import ShopsPagination from "@/shops/components/ShopsPagination";
import ShopsTable from "@/shops/components/ShopsTable";
import { ShopsListContext } from "@/shops/context/ShopsListContext";
import { useShopsQuery } from "@/shops/queries/useShopsQuery";
import { loadShops } from "@/shops/slice/shopsSlice";
import { useAppDispatch } from "@/store/hooks";
import { useContext, useEffect } from "react";

const ShopsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { page } = useContext(ShopsListContext);
  const { data, isSuccess } = useShopsQuery(page);

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadShops(data.shops));
    }
  }, [data?.shops, dispatch, isSuccess]);

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
