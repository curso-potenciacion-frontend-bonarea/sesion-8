import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";

const EmployeesCount = (): React.ReactElement => {
  const shops = useAppSelector((state) => state.shops.list);

  const total = useMemo(
    () =>
      shops.reduce(
        (employeesCount, shop) => employeesCount + shop.employees,
        0
      ),
    [shops]
  );

  return <p>Employees: {total}</p>;
};

export default EmployeesCount;
