import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ja53sg',
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "cypress/results/test-results.xml",
    toConsole: true,
  },
});
