import { defineConfig, devices } from '@playwright/test';
// playwright.config.ts

module.exports = defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 4, // Set the number of retries for all projects

  timeout: 5 * 60 * 1000, // How long before a test fails due to running for too long
  expect: {
    timeout: 60 * 1000,
  }, // How long an individual expect() function will fail
  reportSlowTests: null,

  workers: process.env.FUNCTIONAL_TESTS_WORKERS ? 5 : 5,
  // The number of tests that can run in parallel
  reporter: process.env.CI ? "html" : "html",
  // How the tests will be reported, see playwright.dev reporters for more.
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome", // Desktop Chrome
        trace: "retain-on-first-failure", // Gives a playwright trace on failure
        javaScriptEnabled: true, // Enables Javascript in the browser
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"], // Desktop firefox
        screenshot: "off", // Decides whether it screenshots on failure
        trace: "retain-on-first-failure",
        javaScriptEnabled: true,
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"], // Desktop Safari
        screenshot: "off",
        trace: "retain-on-first-failure",
        javaScriptEnabled: true,
      },
    },
    {
      name: "MobileChrome",
      use: {
        ...devices["Pixel 5"], // Google pixel 5 Chrome
        screenshot: "only-on-failure",
        trace: "off",
      },
    },
    {
      name: "MobileSafari",
      use: {
        ...devices["iPhone 12"], // iPhone 12 Safari
        screenshot: "only-on-failure",
        trace: "off",
      },
    },
    {
      name: "MicrosoftEdge",
      use: {
        ...devices["Desktop Edge"], // MS Edge desktop
        channel: "msedge",
        screenshot: "only-on-failure",
        trace: "off",
      },
    },
  ],
});

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
