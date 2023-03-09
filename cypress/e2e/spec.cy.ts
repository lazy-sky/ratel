describe('visit homepage', () => {
  it('passes', () => {
    cy.visit('/');
  });
});

describe('render Home completely', () => {
  it('finds the text "Learn about Next.js"', () => {
    cy.visit('/');
    cy.contains('Learn about Next.js');
  });
});

export {};
