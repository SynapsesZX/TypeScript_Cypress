import { SwagLabsLoginPage } from "cypress/support/pages/SwagLabs/SwagLabsLogin";
import { fakePet } from "@fixtures/new_pet";

describe("Test SwagLabs Login Page with different type of data", () => {
  const user = new SwagLabsLoginPage();

  it("Login with invalid data", () => {
    user.visit("https://www.saucedemo.com/");
    user.enterDataToUsernameInputField("dfgfdgfdg");
    user.enterDataToPasswordInputField("dfgfdgfgdffgf");
    user.clickLoginButton();
    user.checkValidationMessage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Login with valid data", () => {
    user.visit("https://www.saucedemo.com/");
    user.enterDataToUsernameInputField("standard_user");
    user.enterDataToPasswordInputField("secret_sauce");
    user.clickLoginButton();
  });
});
