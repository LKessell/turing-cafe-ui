describe('Test environment', () => {
  it('Should expect true to equal true', () => {
    expect(true).to.equal(true);
  });
});

describe('Dashboard user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should be able to visit http://localhost:3000/ and see a list of reservations', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations');
    cy.get('.reserv-card').contains('Christie');
    cy.get('.reserv-card').contains('Robbie');
  });

});
