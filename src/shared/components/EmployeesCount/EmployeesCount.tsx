import { useMemo } from "react";
import { useAppStore } from "@/store";

const EmployeesCount = (): React.ReactElement => {
  const shops = useAppStore((state) => state.shops.list);

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
