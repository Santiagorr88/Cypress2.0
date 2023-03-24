describe("test de login", () => {
  beforeEach(() => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
  });

  it("Que registra los datos introducidos", () => {
    cy.get(".new-todo").type("Patatas{enter}");
  });
  it("Que los datos son tachados", () => {
    cy.get(".new-todo").type("Patatas{enter}");
    cy.get(".toggle").click();
  });
  it("Que registra Varios datos introducidos", () => {
    cy.get(".new-todo").type("Patatas{enter}");
    cy.get(".new-todo").type("Solomillo{enter}");
  });
  it("validar que  Varios datos introducidos son tachados", () => {
    cy.get(".new-todo").type("Patatas{enter}");
    cy.get(".new-todo").type("Solomillo{enter}");
    cy.get(":nth-child(1) > .view > .toggle").click();
    cy.get(":nth-child(2) > .view > .toggle").click();
  });
  it("validar que  Varios datos introducidos solo muestras los activos", () => {
    cy.get(".new-todo").type("Patatas{enter}");
    cy.get(".new-todo").type("Solomillo{enter}");
    cy.get(":nth-child(1) > .view > .toggle").click();
    cy.get(":nth-child(2) > a").click();
  });
  it("validar que  Varios datos introducidos solo muestras los completados", () => {
    cy.get(".new-todo").type("Patatas{enter}");
    cy.get(".new-todo").type("Solomillo{enter}");
    cy.get(":nth-child(1) > .view > .toggle").click();
    cy.get(":nth-child(3) > a").click();
  });
  it("validar que elimina los datos completados ", () => {
    cy.get(".new-todo").type("Patatas{enter}");
    cy.get(".new-todo").type("Solomillo{enter}");
    cy.get(":nth-child(1) > .view > .toggle").click();
    cy.get(".clear-completed").click();
    cy.get(":nth-child(1) > a").click();
  });
  it("validar que los datos si no estan marcados aparecen vacios en completados ", () => {
    cy.get(".new-todo").type("Patatas{enter}");
    cy.get(".new-todo").type("Solomillo{enter}");
    cy.get(":nth-child(3) > a").click();
  });
  it("validar que los datos si no estan marcados aparecen vacios en completados ", () => {
    cy.get(".new-todo").type("Patatas{enter}");
    cy.get(".new-todo").type("Solomillo{enter}");
    cy.get(":nth-child(1) > .view > label").type("{ selectAll }");
  });
});
