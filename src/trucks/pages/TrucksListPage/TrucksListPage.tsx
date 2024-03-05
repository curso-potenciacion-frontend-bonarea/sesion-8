import Heading from "@/shared/components/Heading";
import { useAppStore } from "@/store";
import TrucksList from "@/trucks/components/TrucksList";
import { Truck } from "@/trucks/types";
import { useEffect } from "react";

const TrucksListPage = (): React.ReactElement => {
  const loadTrucks = useAppStore((state) => state.trucks.loadTrucks);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/trucks`)
      .then((response) => response.json() as Promise<{ trucks: Truck[] }>)
      .then(({ trucks }) => {
        loadTrucks(trucks);
      });
  }, [loadTrucks]);

  return (
    <>
      <Heading level={2}>Trucks list</Heading>
      <TrucksList />
    </>
  );
};

export default TrucksListPage;
