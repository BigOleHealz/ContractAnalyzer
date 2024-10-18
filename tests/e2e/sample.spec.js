describe('Sample Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your App');
  });

  it('Checks for a specific element', () => {
    cy.visit('/');
    cy.get('.specific-element').should('exist');
  });
});
