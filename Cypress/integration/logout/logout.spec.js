/// <referecne types ="cypress" />

it("valid user can logout", () => {
  cy.visit("https://the-internet.herokuapp.com/login");
  cy.get("#username").type("tomsmith");
  cy.get("#password").type("SuperSecretPassword!");
  cy.get(".fa").click();
  cy.get(".button").click();
  cy.get("#flash").contains("You logged out of the secure area!");
});
