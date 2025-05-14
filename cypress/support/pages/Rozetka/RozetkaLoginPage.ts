export class RozetkaLoginPage {
  private selectors = {
    socialButton: ".header-actions button.header__button",
    emailOption: '[title="Email"]',
    emailInput: "#email",
    passwordInput: "#password",
    submitButton: '[type="submit"]',
    errorHint: ".form__hint_type_warning",
    socialButtonOpen: ".social-buttons button.social-buttons__button-open",
    validationMessage: ".validation-message",
  };

  visit(link: string): void {
    cy.visit(link);
    cy.url().should("eq", link);
  }

  clickSocialButton(): void {
    cy.get(this.selectors.socialButton, { timeout: 3000 })
      .should("be.visible")
      .wait(2000)
      .click();
  }

  clickSocialButtonOpen(): void {
    cy.get(this.selectors.socialButtonOpen).click();
  }

  clickLoginByEmail(): void {
    cy.get(this.selectors.emailOption).click();
  }

  enterDataToEmailInputField(data: string): void {
    cy.get(this.selectors.emailInput).type(data);
  }

  enterDataToPasswordInputField(data: string): void {
    cy.get(this.selectors.passwordInput).type(data);
  }

  clickSubmitButton(): void {
    cy.get(this.selectors.submitButton)
      .click()
      .should("have.attr", "type", "submit");
  }

  checkErrorHint(expected_text: string): void {
    cy.get(this.selectors.errorHint)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq(expected_text);
      });
  }
  checkValidationMessage(expected_text: string): void {
    cy.get(this.selectors.validationMessage)
      .invoke("text")
      .then((text) => {
        const cleanedActual = text.trim();
        const cleanedExpected = expected_text.trim();
        expect(cleanedActual).to.eq(cleanedExpected);
      });
  }
}
