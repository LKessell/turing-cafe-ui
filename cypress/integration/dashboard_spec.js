describe('Test environment', () => {
  it('Should expect true to equal true', () => {
    expect(true).to.equal(true);
  });
});

describe('Dashboard user flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations',
      [
        {
          id: 1,
          name: 'Christie',
          date: '12/29',
          time: '7:00',
          number: 12
        }, {
          id: 7,
          name: 'Robbie',
          date: '6/5',
          time: '5:30',
          number: 2
        }
      ]
    );

    cy.intercept('POST', 'http://localhost:3001/api/v1/reservations', {
      id: 7435839,
      name: 'Lauren',
      date: '6/18',
      time: '6:30',
      number: 4
    });

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
    cy.get('input[name="name"]').should('have.value', '')
    cy.get('input[name="time"]').should('have.value', '')
  });

});
