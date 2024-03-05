import Heading from "@/shared/components/Heading";
import Loading from "@/shared/components/Loading";
import { useAppStore } from "@/store";
import TrucksList from "@/trucks/components/TrucksList";
import { useTrucksQuery } from "@/trucks/queries/useTrucksQuery";
import { useEffect } from "react";

const TrucksListPage = (): React.ReactElement => {
  const loadTrucks = useAppStore((state) => state.trucks.loadTrucks);
  const { data, isLoading, isSuccess, isError } = useTrucksQuery();

  useEffect(() => {
    if (isSuccess) {
      loadTrucks(data.trucks);
    }
  }, [data?.trucks, isSuccess, loadTrucks]);

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
