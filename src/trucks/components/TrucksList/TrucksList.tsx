import { useAppStore } from "@/store";

const TrucksList = (): React.ReactElement => {
  const trucks = useAppStore((state) => state.trucks.list);

  return (
    <ul className="trucks">
      {trucks.map(({ id, license }) => (
        <li key={id}>License: {license}</li>
      ))}
    </ul>
  );
};

export default TrucksList;
