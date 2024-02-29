import Heading from "@/shared/components/Heading";
import FeaturedShops from "@/shops/components/FeaturedShops";
import ShopsTable from "@/shops/components/ShopsTable";
import { loadShops } from "@/shops/slice/shopsSlice";
import { Shop } from "@/shops/types";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

const ShopsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("http://localhost:4000/shops")
      .then((response) => response.json() as Promise<{ shops: Shop[] }>)
      .then(({ shops }) => {
        dispatch(loadShops(shops));
      });
  }, [dispatch]);

  return (
    <>
      <Heading level={2}>Shops list</Heading>
      <FeaturedShops />
      <ShopsTable />
    </>
  );
};

export default ShopsListPage;
