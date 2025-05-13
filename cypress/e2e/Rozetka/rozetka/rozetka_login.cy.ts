import { RozetkaLoginPage } from "../../../support/pages/Rozetka/RozetkaLoginPage";

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
});
