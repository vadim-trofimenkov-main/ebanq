export default class TransfersPage {
  static openPage() {
    cy.visit("/transfer");
  }

  static checkIsPageOpened() {
    cy.url().should("contain", "transfer");
    cy.get("[routerlink='/transfer']").should("have.class", "active");
  }

  static clickTransferBetweenAccountsButton() {
    cy.get('[ng-reflect-router-link="transfer-between-accounts"]').click();
    cy.get(".page-name").should("have.text", "Transfer Between Accounts");
  }

  static transfer(debitAc, creditAc, amount, description) {
    cy.get("div.ng-select-container").eq(0).click();
    cy.get("div.ng-option").contains(debitAc).click();
    cy.get("div.ng-select-container").eq(1).click();
    cy.get("div.ng-option").contains(creditAc).click();
    cy.get(".two-in-row .amount").type(amount);
    cy.get("#description").type(description);
    cy.get("button.def-btn-success").click(); //click continue button
    cy.get("button.def-btn-success").click(); //click confirm button
  }

  static checkTransactionSubmitted() {
    cy.get(".popup-message")
      .should("be.visible")
      .and(
        "contain.text",
        " Your request has been sent for approval. Request ID"
      );
  }
}
