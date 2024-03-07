import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { Shop } from "../types";

const userFactory = Factory.define<Shop>(({ sequence }) => ({
  id: sequence,
  name: faker.word.words(2),
  city: faker.location.city(),
  employees: faker.number.int(),
  picture: {
    large: faker.image.url(),
    thumbnail: faker.image.url(),
  },
}));

export const createShop = (shopProperties: Partial<Shop>) => {
  return userFactory.build(shopProperties);
};

export const createShops = (number = 3) => userFactory.buildList(number);
