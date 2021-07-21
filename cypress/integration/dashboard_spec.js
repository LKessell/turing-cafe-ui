describe('Test environment', () => {
  it('Should expect true to equal true', () => {
    expect(true).to.equal(true);
  });
});

describe('Dashboard user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

});
