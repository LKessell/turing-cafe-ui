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

  it('Should have a form to submit new reservations', () => {
    cy.get('input').should('be.visible');
    cy.get('button').should('be.visible');
  });

  it('When typing in an input, its value should be updated', () => {
    cy.get('input[name="name"]').type('Lauren')
      .should('have.value', 'Lauren');

    cy.get('input[name="date"]').type('6/18')
      .should('have.value', '6/18');
  });

  it('Should be able to add a new reservation by filling out the form, then clicking the submit button', () => {
    cy.get('input[name="name"]').type('Lauren')
    cy.get('input[name="date"]').type('6/18')
    cy.get('input[name="time"]').type('6:30')
    cy.get('input[name="number"]').type('4')
    cy.get('.reserv-card').should('not.contain', 'Lauren')
    cy.get('button').click()
    cy.get('.reserv-card').first().should('contain', 'Lauren')
      .should('contain', '6/18')
      .should('contain', '6:30')
      .should('contain', '4')
  });

});
