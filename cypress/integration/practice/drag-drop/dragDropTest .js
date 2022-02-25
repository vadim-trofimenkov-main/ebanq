/// <reference types="cypress" />
//https://github.com/4teamwork/cypress-drag-drop
//https://applitools.com/event/drag-and-drop-in-cypress/
describe("Drag-drop suite", function () {
  beforeEach(() => {
    cy.visit("http://the-internet.herokuapp.com/drag_and_drop");
  });
  // it("Drag-drop case", async function () {
  //   cy.get("#column-a")
  //     .drag("#column-b")
  //     .then((success) => {
  //       assert.isTrue(success);
  //     });
  //   cy.get("#column-b").should("have.text", "A");
  // });
  it("should drag fried chicken to the order", () => {
    const dataTransfer = new DataTransfer();
    cy.get("#column-a").trigger("dragstart", {
      dataTransfer,
    });
    cy.get("#column-b").trigger("drop", {
      dataTransfer,
    });
  });
  afterEach(() => {
    cy.get("#column-b").should("have.text", "A");
  });
});
