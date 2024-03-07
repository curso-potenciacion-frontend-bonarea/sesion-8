import { useAppSelector } from "@/store/hooks";

const TrucksList = (): React.ReactElement => {
  const trucks = useAppSelector((state) => state.trucks.list);

  return (
    <ul className="trucks">
      {trucks.map(({ id, license }) => (
        <li key={id}>License: {license}</li>
      ))}
    </ul>
  );
};

export default TrucksList;
