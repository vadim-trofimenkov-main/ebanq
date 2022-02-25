/// <reference types="cypress" />
import TransfersPage from "../../support/pageObjects/TransfersPage";

const USERNAME = Cypress.env("userName");
const PASSWORD = Cypress.env("password");

describe("Transfers", () => {
  beforeEach(function () {
    cy.login(USERNAME, PASSWORD);
    TransfersPage.openPage();
    TransfersPage.checkIsPageOpened();
  });

  it("transfer between accounts", function () {
    TransfersPage.clickTransferBetweenAccountsButton();
    TransfersPage.transfer(
      "EBQ11113487654",
      "EBQ11223487456",
      500,
      "Test operation"
    );
    TransfersPage.checkTransactionSubmitted();
  });
});
