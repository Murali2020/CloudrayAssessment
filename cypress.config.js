const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    specPattern: '/**/**/*.feature',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: 'https://www.geniehealthcare.com/#/home'
  },
});
