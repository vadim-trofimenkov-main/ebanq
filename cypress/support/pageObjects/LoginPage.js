export default class LoginPage {
  openPage() {
    cy.visit(Cypress.env("baseUrl") + "log-in");
  }

  checkIsPageOpened() {
    cy.get(".heading h1").should("be.visible").and("have.text", "Login");
  }

  getUserName() {
    return cy.get('[placeholder="Enter username or email address"]');
  }

  getPassword() {
    return cy.get('[placeholder="Enter password"]');
  }

  clickSubmitButton() {
    cy.get("button.controls__submit").click();
  }

  checkErrorFieldMessageIsDisplayed(message) {
    cy.get("label.error-word").should("be.visible").and("have.text", message);
  }

  checkErrorAlertIsDisplayed() {
    cy.get("div.error .sn-content")
      .should("be.visible")
      .and("have.text", "Wrong username or password.");
  }
}
