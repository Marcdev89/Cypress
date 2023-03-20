const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // experimentalSessionAndOrigin:true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //change by QA environment (1-4)
    baseUrl: "https://qa1.ncampus.vertice.org/",
  },
});
