/// <reference types="cypress" />
import LoginPage from "../../support/pageObjects/LoginPage";
import HomePage from "../../support/pageObjects/HomePage";

describe("Login to Ebanq account", () => {
  beforeEach(function () {
    cy.fixture("userCredentials").then((data) => {
      this.data = data;
    });
    this.loginPage = new LoginPage();
    this.homePage = new HomePage();
    this.loginPage.openPage();
    this.loginPage.checkIsPageOpened();
  });

  it("Login to Ebanq account with correct credentials", function () {
    this.loginPage.getUserName().type(this.data.userName);
    this.loginPage.getPassword().type(this.data.password);
    this.loginPage.clickSubmitButton();
    this.homePage.checkIsPageOpened();
  });

  it("Login to Ebanq account with incorrect credentials", function () {
    this.loginPage.getUserName().type("username");
    this.loginPage.getPassword().type("password");
    this.loginPage.clickSubmitButton();
    this.loginPage.checkErrorFieldMessageIsDisplayed(
      "Wrong username or password."
    );
    this.loginPage.checkErrorAlertIsDisplayed();
  });

  it("Login to Ebanq account with empty username", function () {
    this.loginPage.getPassword().type(this.data.password);
    this.loginPage.clickSubmitButton();
    this.loginPage.checkErrorFieldMessageIsDisplayed("Field is required.");
  });

  it("Login to Ebanq account with empty password", function () {
    this.loginPage.getUserName().type(this.data.userName);
    this.loginPage.clickSubmitButton();
    this.loginPage.checkErrorFieldMessageIsDisplayed("Field is required.");
  });

  it("Login to Ebanq account with username less than 4 chars", function () {
    this.loginPage.getUserName().type("qwe");
    this.loginPage.getPassword().type(this.data.password);
    this.loginPage.clickSubmitButton();
    this.loginPage.checkErrorFieldMessageIsDisplayed(
      "Should be minimum 4 chars."
    );
  });
});
