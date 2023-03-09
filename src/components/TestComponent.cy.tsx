import { mount } from 'cypress/react18';

import TestComponent from './TestComponent';

describe('TestComponent', () => {
  it('shows test text', () => {
    mount(<TestComponent />);
    cy.get('div').should('contain.text', 'Test Text');
  });
});
