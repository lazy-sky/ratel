// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// eslint-disable-next-line no-restricted-imports
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Ensure global styles are loaded
// eslint-disable-next-line no-restricted-imports
import '../../src/styles/globals.css';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.

// Example use:
// cy.mount(<MyComponent />)
import '@cypress/code-coverage/support';

export {};
