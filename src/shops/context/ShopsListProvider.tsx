import { PropsWithChildren, useMemo, useState } from "react";
import { ShopsListContext, ShopsListContextValue } from "./ShopsListContext";

const ShopsListProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [size, setSize] = useState<"" | "sm" | "xl">("");
  const [page, setPage] = useState(1);

  const shopsListContextValue: ShopsListContextValue = useMemo(
    () => ({
      filterSize: size,
      setFilterSize: setSize,
      page,
      setPage,
    }),
    [page, size]
  );

  return (
    <ShopsListContext.Provider value={shopsListContextValue}>
      {children}
    </ShopsListContext.Provider>
  );
};

export default ShopsListProvider;
