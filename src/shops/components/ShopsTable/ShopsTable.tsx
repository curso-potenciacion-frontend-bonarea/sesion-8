import "./ShopsTable.scss";
import Button from "@/shared/components/Button";
import { useContext } from "react";
import { ShopsListContext } from "@/shops/context/ShopsListContext";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  decrementShopEmployees,
  incrementShopEmployees,
  toggleFeaturedShop,
} from "@/shops/slice/shopsSlice";
import { useShopsDeleteMutation } from "@/shops/mutations/shopsMutations";

const ShopsTable = (): React.ReactElement => {
  const shops = useAppSelector((state) => state.shops.list);
  const deleteMutation = useShopsDeleteMutation();
  const dispatch = useAppDispatch();

  const { filterSize } = useContext(ShopsListContext);

  const onFeatureShop = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    dispatch(toggleFeaturedShop(+id));
  };

  const onDeleteShop = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    deleteMutation.mutate(+id);

    // Si dispatcheamos en el componente
    // await deleteMutation.mutateAsync(+id);
    // dispatch(deleteShop(+id));
  };

  const onIncrementEmployees = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    dispatch(incrementShopEmployees(+id));
  };

  const onDecrementEmployees = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    dispatch(decrementShopEmployees(+id));
  };

  return (
    <>
      <p>Filtered: {filterSize}</p>
      <table className="shops-data">
        <thead>
          <tr>
            <th className="shops-data__column--fixed">Image</th>
            <th>Name</th>
            <th>City</th>
            <th># employees</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shops.map(({ id, name, city, employees, picture }) => (
            <tr key={id}>
              <td className="shops-data__column--fixed">
                <img src={`/pictures/${picture.thumbnail}`} alt={name} />
              </td>
              <td>{name}</td>
              <td>{city}</td>
              <td>
                {employees}{" "}
                <Button
                  variant="outline"
                  onClick={onDecrementEmployees}
                  data-id={id}
                >
                  -
                </Button>{" "}
                <Button
                  variant="outline"
                  onClick={onIncrementEmployees}
                  data-id={id}
                >
                  +
                </Button>
              </td>
              <td>
                <Button variant="outline" onClick={onFeatureShop} data-id={id}>
                  feature
                </Button>
                <Button variant="outline" onClick={onDeleteShop} data-id={id}>
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShopsTable;
