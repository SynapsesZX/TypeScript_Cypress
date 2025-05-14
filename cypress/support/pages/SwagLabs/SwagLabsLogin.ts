export class SwagLabsLoginPage {
  private selectors = {
    userNameInputField: "#user-name",
    passwordInputField: "#password",
    loginButton: "#login-button",
    errorHint: '[data-test="error"]',
  };

  visit(link: string): void {
    cy.visit(link);
    cy.url().should("eq", link);
  }

  clickLoginButton(): void {
    cy.get(this.selectors.loginButton).should("be.visible").wait(1000).click();
  }

  enterDataToUsernameInputField(data: string): void {
    cy.get(this.selectors.userNameInputField)
      .type(data)
      .should("have.attr", "placeholder", "Username");
  }

  enterDataToPasswordInputField(data: string): void {
    cy.get(this.selectors.passwordInputField)
      .type(data)
      .should("have.attr", "placeholder", "Password");
  }

  checkValidationMessage(expected_text: string): void {
    cy.get(this.selectors.errorHint)
      .invoke("text")
      .then((text) => {
        const cleanedActual = text.trim();
        const cleanedExpected = expected_text.trim();
        expect(cleanedActual).to.eq(cleanedExpected);
      });
  }
}
