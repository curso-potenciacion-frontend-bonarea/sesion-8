export type Truck = {
  id: number;
  license: string;
};

export type TrucksState = {
  trucks: {
    list: Truck[];
    loadTrucks: (trucks: Truck[]) => void;
  };
};
