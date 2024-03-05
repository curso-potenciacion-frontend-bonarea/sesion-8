export type Shop = {
  id: number;
  name: string;
  city: string;
  employees: number;
  picture: {
    thumbnail: string;
    large: string;
  };
};

export type ShopsState = {
  shops: {
    list: Shop[];
    featured: Shop[];
    loadShops: (shops: Shop[]) => void;
    featureShop: (shopId: Shop["id"]) => void;
    incrementEmployees: (shopId: Shop["id"]) => void;
    decrementEmployees: (shopId: Shop["id"]) => void;
  };
};
