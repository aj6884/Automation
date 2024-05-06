const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: null,
    waitForAnimations: true,
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


//run a spcific file in cypress
// npx cypress open --config integrationFolder=cypress/integration/newexamples

