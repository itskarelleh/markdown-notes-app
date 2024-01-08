describe('First time user visits the site', () => {
  it('passes', () => {
    cy.visit(Cypress.env('base_url'));
    expect(true).to.equal(true);
  })
});

