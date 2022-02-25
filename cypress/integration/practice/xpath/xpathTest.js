/// <reference types="cypress" />
//https://www.npmjs.com/package/cypress-xpath
const USERNAME = Cypress.env("userName");
const PASSWORD = Cypress.env("password");
describe("Xpath suite", function () {
  it("xpath case", function () {
    cy.visit("/log-in");
    cy.xpath("//*[contains(@class, 'heading')]//h1")
      .should("be.visible")
      .and("have.text", "Login");
    cy.xpath('//*[@placeholder="Enter username or email address"]').type(
      USERNAME
    );
    cy.xpath('//*[@placeholder="Enter password"]').type(PASSWORD);
    cy.xpath("//button[contains(@class, 'controls__submit')]").click();
    cy.xpath("//div[contains(@class, 'aside-bar__image')]").should(
      "be.visible"
    );
  });
});
