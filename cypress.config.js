const { defineConfig } = require('cypress')

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://automationintesting.online',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',

    setupNodeEvents(on, config) {
      // implement node event listeners here

      return config
    },
  },
})
