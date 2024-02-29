import Button from "@/shared/components/Button";
import { ShopsListContext } from "@/shops/context/ShopsListContext";
import { useContext } from "react";

const ShopsPagination = (): React.ReactElement => {
  const { page, setPage } = useContext(ShopsListContext);

  const previousPage = () => {
    setPage((page) => page - 1);
  };

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="pagination">
      <Button variant="outline" onClick={previousPage}>
        Prev
      </Button>
      &nbsp;{page}&nbsp;
      <Button variant="outline" onClick={nextPage}>
        Next
      </Button>
    </div>
  );
};

export default ShopsPagination;
