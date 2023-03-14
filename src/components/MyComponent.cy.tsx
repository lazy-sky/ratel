import { mount } from 'cypress/react18';

import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('shows test text', () => {
    mount(<MyComponent />);
    cy.get('div').should('contain.text', 'This is my component');
  });
});
