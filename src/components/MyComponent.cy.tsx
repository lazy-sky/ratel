import { mount } from 'cypress/react18';

import TestComponent from './TestComponent';

describe('MyComponent', () => {
  it('shows test text', () => {
    mount(<TestComponent />);
    cy.get('div').should('contain.text', 'This is my component');
  });
});
