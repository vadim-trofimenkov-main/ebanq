/// <reference types="cypress" />
//https://www.npmjs.com/package/cypress-promise
describe.skip("Async/await suite", function () {
  it.skip("Async/await case", async function () {
    // const foo = await cy.wrap("foo").promisify();
    // const bar = await cy.wrap("bar").promisify();
    // expect(foo).to.equal("foo");
    // expect(bar).to.equal("bar");

    const user = await cy.fixture("example").promisify();
    const user1 = await cy.fixture("example copy").promisify();
    cy.log(user.id, user1.id);
    expect(user.id).to.equal(user1.id);
  });
});
