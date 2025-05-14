import { RozetkaLoginPage } from "../../../support/pages/Rozetka/RozetkaLoginPage";
import { fakePet } from "@fixtures/new_pet";

describe("Test Rozetka Login Page with different type of data", () => {
  const user = new RozetkaLoginPage();

  it("Login with invalid data", () => {
    user.visit("https://rozetka.com.ua/");
    user.clickSocialButton();
    user.clickSocialButtonOpen();
    user.clickLoginByEmail();
    user.enterDataToEmailInputField("fghjgfhjgfgfhjgffj@gmail.com");
    user.enterDataToPasswordInputField("fghfjgjhj5675665");
    user.clickSubmitButton();
    user.checkErrorHint("Такий користувач не зареєстрований");
  });

  it("Login with data from pet json", () => {
    cy.intercept("POST", "https://petstore.swagger.io/v2/pet", {
      statusCode: 200,
      body: fakePet,
    }).as("createPet");
    user.visit("https://rozetka.com.ua/");
    user.clickSocialButton();
    user.clickSocialButtonOpen();
    user.clickLoginByEmail();
    user.enterDataToEmailInputField(fakePet.name);
    user.enterDataToPasswordInputField(fakePet.category.name);
    user.clickSubmitButton();
    user.checkValidationMessage(" Невірний формат email ");
  });
});
