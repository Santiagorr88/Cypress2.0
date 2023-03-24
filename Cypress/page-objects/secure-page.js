/// <referecne types ="cypress" />

export class SecurePage {
  checkMessage(text) {
    cy.get("#flash").contains(text);
  }
}
