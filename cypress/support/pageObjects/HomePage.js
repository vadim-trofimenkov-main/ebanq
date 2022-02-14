export default class HomePage {
  openPage() {
    cy.visit(Cypress.env("baseUrl") + "my-accounts/");
  }

  checkIsPageOpened() {
    cy.get("div.aside-bar__image").should("be.visible");
  }
}
