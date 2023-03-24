/// <referecne types ="cypress" />

import { HomePage } from "../../page-objects/home-page";
import { LoginPage } from "../../page-objects/login-page";
import { SecurePage } from "../../page-objects/secure-page";

describe("test de login", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const securePage = new SecurePage();
  beforeEach(() => {
    homePage.goToHomePage();
    homePage.clickLogin();
  });
  it("valid user can login", () => {
    loginPage.enterUsername("tomsmith");
    loginPage.enterPassword("SuperSecretPassword!");
    loginPage.clickButton();
    securePage.checkMessage("You logged into a secure area!");
  });

  it("usuario no valido no puede loguearse -  username", () => {
    loginPage.enterUsername("smith");
    loginPage.enterPassword("SuperSecretPassword!");
    loginPage.clickButton();
    loginPage.checkErrorMessage("Your username is invalid!");
  });

  it("usuario no valido no puede loguearse - contraseña", () => {
    loginPage.enterUsername("tomsmith");
    loginPage.enterPassword("SuperecretPassword!");
    loginPage.clickButton();
    loginPage.checkErrorMessage("Your password is invalid!");
  });
});
