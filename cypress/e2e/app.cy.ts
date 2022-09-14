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

  it("prevents a user reseting the count value when zero", () => {
    cy.get("@resetValue").should("be.disabled");
  });

  it("prevents a user decrementing the count below zero", () => {
    cy.get("@decrementValue").should("be.disabled");
  });
});
