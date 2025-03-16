const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.automationtesting.in',
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
  },
});
