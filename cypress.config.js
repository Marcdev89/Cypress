require('dotenv').config()

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   // experimentalSessionAndOrigin:true,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //need to be changed by .env
    baseUrl: process.env.QA_URL
  },
});
