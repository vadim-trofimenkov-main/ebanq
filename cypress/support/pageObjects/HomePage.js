export default class HomePage {
  static openPage() {
    cy.visit("/my-accounts");
  }

  static checkIsPageOpened() {
    cy.get("div.aside-bar__image").should("be.visible");
  }
}
