import { defineConfig } from 'cypress'

export default defineConfig({
    chromeWebSecurity: false,
    retries: 2,
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    videosFolder: 'tests/cypress/videos',
    screenshotsFolder: 'tests/cypress/screenshots',
    fixturesFolder: 'tests/cypress/fixture',
    e2e: {
        async setupNodeEvents(on, config) {
            const { default: pluginConfig } = await import('./tests/cypress/plugins/index.js')
            return pluginConfig(on, config)
        },
        baseUrl: 'http://localhost:8000',
        specPattern: 'tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'tests/cypress/support/index.js',
    },
})
