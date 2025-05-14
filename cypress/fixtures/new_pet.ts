import { faker } from "@faker-js/faker";

export const fakePet = {
  id: faker.number.int(),
  category: {
    id: 0,
    name: faker.animal.bear(),
  },
  name: faker.animal.bear(),
  photoUrls: ["string"],
  tags: [
    {
      id: 0,
      name: "cute",
    },
  ],
  status: "available",
};
