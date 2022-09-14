describe("React Counter App", () => {
  beforeEach(() => {
    cy.visit("index.html");

    cy.findByLabelText("Count value").as("countValue");
    cy.findByRole("button", { name: "Increment" }).as("incrementValue");
    cy.findByRole("button", { name: "Decrement" }).as("decrementValue");
    cy.findByRole("button", { name: "Reset" }).as("resetValue");
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
