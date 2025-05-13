import { PetStore } from "../../../support/api/petstore_api_body";

describe("API Testing Petstore", () => {
  const apiUrl = "https://petstore.swagger.io/v2/pet";
  const petStoreBody = new PetStore();
  const { petBodyObject } = petStoreBody.createPet();

  it("Post/ Create a new pet and validate by ID", () => {
    cy.request({
      method: "POST",
      url: `${apiUrl}`,
      body: petBodyObject,
      headers: {
        "Content-type": "application/json",
      },
    }).then((postResponse) => {
      expect(postResponse.status).to.eq(200);
      expect(postResponse.body.category.name).to.eq(
        petBodyObject.category.name
      );
      expect(postResponse.body.name).to.eq(petBodyObject.name);
      cy.log(postResponse.body.id);
      const petID = postResponse.body.id;
      //cy.wait(10000);

      //cy.request({
      //  method: "GET",
      //  url: `${apiUrl}/${petID}`,
      //  headers: {
      //    "Content-type": "application/json",
      //  },
      // }).then((getResponse) => {
      //   expect(getResponse.status).to.eq(200);
      //   expect(getResponse.body.id).to.eq(petID);
      //   expect(getResponse.body.name).to.eq(petBodyObject.name);
      // });
    });
  });
});
