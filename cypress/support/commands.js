// ***********************************************
import "cypress-localstorage-commands";
import "cypress-iframe";
import "@4tw/cypress-drag-drop";
import "@shelex/cypress-allure-plugin";
import LoginPage from "../support/pageObjects/LoginPage";
import HomePage from "../support/pageObjects/HomePage";

// Cypress.Commands.add("login", (username, password) => {
//   cy.request("POST", Cypress.env("apiSignInUrl"), {
//     data: {
//       email: username,
//       password: password,
//     },
//   })
//     .its("body")
//     .then((res) => cy.setLocalStorage("ebanq-auth", JSON.stringify(res.data)));
// });

Cypress.Commands.add("login", (username, password) => {
  LoginPage.openPage();
  LoginPage.checkIsPageOpened();
  LoginPage.getUserName().type(username);
  LoginPage.getPassword().type(password);
  LoginPage.clickSubmitButton();
  HomePage.checkIsPageOpened();
});
