/// <referecne types ="cypress" />

describe("test de login", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("valid user can login", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("You logged into a secure area!");
  });

  it("usuario no valido no puede loguearse -  username", () => {
    cy.get("#username").type("tommith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your username is invalid!");
  });

  it("usuario no valido no puede loguearse - contraseña", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("Super");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your password is invalid!");
  });
});

// .skip -> Salta el un test
// .only -> Para solo ejecutar solo un test
