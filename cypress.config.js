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
    //change by QA environment (1-4)
    baseUrl: "https://qa1.ncampus.vertice.org/",
  },
});
