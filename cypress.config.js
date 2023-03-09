/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/plugins')(on, config);
      require('@cypress/code-coverage/task')(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    experimentalSingleTabRunMode: true,
    supportFile: 'cypress/support/component.ts',
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/plugins')(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});
