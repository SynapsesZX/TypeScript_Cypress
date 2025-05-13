import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "cypress/results/test-results.[hash].xml",
    toConsole: true,
  },
});
