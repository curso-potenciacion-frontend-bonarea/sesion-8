import { useAppSelector } from "@/store/hooks";
import { useMemo } from "react";

const EmployeesCount = (): React.ReactElement => {
  const shops = useAppSelector((state) => state.shops.list);

  const total = useMemo(
    () => shops.reduce((total, shop) => total + shop.employees, 0),
    [shops]
  );

  return <p>Employees: {total}</p>;
};

export default EmployeesCount;
