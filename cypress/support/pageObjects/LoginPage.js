export default class LoginPage {
  static openPage() {
    cy.visit("/log-in");
  }

  static checkIsPageOpened() {
    cy.get(".heading h1").should("be.visible").and("have.text", "Login");
  }

  static getUserName() {
    return cy.get('[placeholder="Enter username or email address"]');
  }

  static getPassword() {
    return cy.get('[placeholder="Enter password"]');
  }

  static clickSubmitButton() {
    cy.get("button.controls__submit").click();
  }

  static checkErrorFieldMessageIsDisplayed(message) {
    cy.get("label.error-word").should("be.visible").and("have.text", message);
  }

  static checkErrorAlertIsDisplayed() {
    cy.get("div.error .sn-content")
      .should("be.visible")
      .and("have.text", "Wrong username or password.");
  }
}
