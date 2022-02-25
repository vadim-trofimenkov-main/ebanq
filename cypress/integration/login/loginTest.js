/// <reference types="cypress" />
import LoginPage from "../../support/pageObjects/LoginPage";
import HomePage from "../../support/pageObjects/HomePage";

const USERNAME = Cypress.env("userName");
const PASSWORD = Cypress.env("password");

describe("Login to Ebanq account", () => {
  beforeEach(function () {
    LoginPage.openPage();
    LoginPage.checkIsPageOpened();
  });

  it("Login to Ebanq account with correct credentials", function () {
    LoginPage.getUserName().type(USERNAME);
    LoginPage.getPassword().type(PASSWORD);
    LoginPage.clickSubmitButton();
    HomePage.checkIsPageOpened();
  });

  it("Login to Ebanq account with incorrect credentials", function () {
    LoginPage.getUserName().type("username");
    LoginPage.getPassword().type("password");
    LoginPage.clickSubmitButton();
    LoginPage.checkErrorFieldMessageIsDisplayed("Wrong username or password.");
    LoginPage.checkErrorAlertIsDisplayed();
  });

  it("Login to Ebanq account with empty username", function () {
    LoginPage.getPassword().type(PASSWORD);
    LoginPage.clickSubmitButton();
    LoginPage.checkErrorFieldMessageIsDisplayed("Field is required.");
  });

  it("Login to Ebanq account with empty password", function () {
    LoginPage.getUserName().type(USERNAME);
    LoginPage.clickSubmitButton();
    LoginPage.checkErrorFieldMessageIsDisplayed("Field is required.");
  });

  it("Login to Ebanq account with username less than 4 chars", function () {
    LoginPage.getUserName().type("qwe");
    LoginPage.getPassword().type(PASSWORD);
    LoginPage.clickSubmitButton();
    LoginPage.checkErrorFieldMessageIsDisplayed("Should be minimum 4 chars.");
  });
});
