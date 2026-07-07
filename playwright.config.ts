import { defineConfig } from '@playwright/test';
import { globalConfig } from '@configs/global-config';

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : globalConfig.maxWorkers,

    timeout: globalConfig.testTimeout,

    expect: {
        timeout: globalConfig.expectTimeout,
    },

    reporter: [
        ['html', { outputFolder: 'reports', open: 'never' }],
        ['list'],
    ],

    use: {
        baseURL: globalConfig.baseUrl,

        browserName: globalConfig.browser,

        headless: globalConfig.headless,

        viewport: null,

        launchOptions: {
            args: ['--start-maximized'],
        },

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure',

        actionTimeout: 30000,

        navigationTimeout: 60000,

        ignoreHTTPSErrors: true,

        locale: 'en-US',

        timezoneId: 'Asia/Dhaka',
    },

    projects: [
        {
            name: 'Chromium',
        },
    ],
});
