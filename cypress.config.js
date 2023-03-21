const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Cypress browser width&height
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  e2e: {
    // experimentalSessionAndOrigin:true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //need to be changed by .env
    baseUrl: 'https://qa4.ncampus.vertice.org/'
  },
});