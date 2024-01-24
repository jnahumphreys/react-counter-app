describe("React Counter App", () => {
  beforeEach(() => {
    cy.visit("index.html");

    cy.get("[data-cy='count']").as("countValue");
    cy.get("[data-cy='increment']").as("incrementValue");
    cy.get("[data-cy='decrement']").as("decrementValue");
    cy.get("[data-cy='reset']").as("resetValue");
  });

  it("loads with the correct initial count value", () => {
    cy.get("@countValue").should("contain", "0");
  });

  it("allows a user to change the count value", () => {
    cy.get("@incrementValue").click();
    cy.get("@countValue").should("contain", "1");
    cy.get("@decrementValue").click();
    cy.get("@countValue").should("contain", "0");
  });

  it("allows a user to reset the count value when above zero", () => {
    cy.get("@incrementValue").click();
    cy.get("@countValue").should("contain", "1");
    cy.get("@resetValue").click();
    cy.get("@countValue").should("contain", "0");
  });

  it("persists count changes", () => {
    cy.get("@incrementValue").click();
    cy.get("@incrementValue").click();
    cy.get("@countValue").should("contain", "2");
    cy.get("@decrementValue").click();
    cy.get("@countValue").should("contain", "1");
    cy.reload();
    cy.get("@countValue").should("contain", "1");
  });

  it("prevents a user reseting the count value when zero", () => {
    cy.get("@resetValue").should("be.disabled");
  });

  it("prevents a user decrementing the count below zero", () => {
    cy.get("@decrementValue").should("be.disabled");
  });

  it("supports clients with local storage disabled", () => {
    cy.window().then((win) => {
      cy.stub(win.localStorage, "setItem").throws();
      cy.stub(win.localStorage, "getItem").throws();

      cy.get("@incrementValue").click();
      cy.get("@countValue").should("contain", "1");
      cy.reload();
      cy.get("@countValue").should("contain", "0");
    });
  });
});
