require('dotenv').config()

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Cypress browser width&height
  viewportWidth: 1920,
  viewportHeight: 1080,
  "chromeWebSecurity": false,
  
  e2e: {
    // experimentalSessionAndOrigin:true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //need to be changed by .env
    baseUrl: process.env.QA_URL
  },
});