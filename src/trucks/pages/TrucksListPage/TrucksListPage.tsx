import Heading from "@/shared/components/Heading";
import Loading from "@/shared/components/Loading";
import { useAppDispatch } from "@/store/hooks";
import TrucksList from "@/trucks/components/TrucksList";
import { useTrucksQuery } from "@/trucks/queries/useTrucksQuery";
import { loadTrucks } from "@/trucks/slice/trucksSlice";
import { useEffect } from "react";

const TrucksListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess, isError } = useTrucksQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadTrucks(data.trucks));
    }
  }, [data?.trucks, dispatch, isSuccess]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>HA PETAT</div>;
  }

  return (
    <>
      <Heading level={2}>Trucks list</Heading>
      <TrucksList />
    </>
  );
};

export default TrucksListPage;
