import { faker } from "@faker-js/faker";

export class PetStore {
  createPet() {
    const petBody = {
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
          name: "string",
        },
      ],
      status: "available",
    };
    const json_body = JSON.stringify(petBody, null, 2);
    return { petBodyObject: petBody, json_body };
  }
}
