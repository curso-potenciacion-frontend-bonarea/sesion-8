import { ShopsListContext } from "@/shops/context/ShopsListContext";
import { useContext } from "react";

const ShopsFilters = (): React.ReactElement => {
  const { filterSize, setFilterSize } = useContext(ShopsListContext);

  const onChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSize(event.target.value as "" | "sm" | "xl");
  };

  return (
    <div className="filters">
      <label htmlFor="size">Filter by size: </label>
      <select id="size" value={filterSize} onChange={onChangeSize}>
        <option value=""></option>
        <option value="sm">sm</option>
        <option value="xl">xl</option>
      </select>
    </div>
  );
};

export default ShopsFilters;
