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
  list: Shop[];
  featured: Shop[];
};
