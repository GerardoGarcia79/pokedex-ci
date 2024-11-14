// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here, if needed
    },
    baseUrl: 'http://localhost:5000', // Replace with your actual base URL
    supportFile: false,               // Disable the support file
  },
})
