import { ConfigUtils } from '@utils/ConfigUtils';

// Load .env variables
ConfigUtils.loadEnvironment();

/**
 * Active Environment
 */
const environment = ConfigUtils.get('SYSTEM_ENV').toLowerCase();

/**
 * Environment Prefix
 */
const prefix = environment.toUpperCase();

/**
 * Global Framework Configuration
 */
export const globalConfig = {
    /**
     * Active Environment
     */
    environment,

    /**
     * Application URL
     */
    baseUrl: ConfigUtils.get(`${prefix}_BASE_URL`),

    /**
     * Browser Configuration
     */
    browser: ConfigUtils.get('BROWSER') as 'chromium' | 'firefox' | 'webkit',

    headless: ConfigUtils.getBoolean('HEADLESS'),

    maxWorkers: ConfigUtils.getNumber('MAX_WORKERS'),

    /**
     * Timeout Configuration
     */
    testTimeout: ConfigUtils.getNumber('TEST_TIMEOUT'),

    expectTimeout: ConfigUtils.getNumber('EXPECT_TIMEOUT'),

    /**
     * Reporting
     */
    enableAllure: ConfigUtils.getBoolean('ENABLE_ALLURE'),

    /**
     * Admin User
     */
    admin: {
        username: ConfigUtils.get(`${prefix}_ADMIN_USERNAME`),
        password: ConfigUtils.get(`${prefix}_ADMIN_PASSWORD`),
        displayName: ConfigUtils.get(`${prefix}_ADMIN_NAME`),
        email: ConfigUtils.get(`${prefix}_ADMIN_EMAIL`),
    },

    /**
     * Resident User
     */
    resident: {
        username: ConfigUtils.get(`${prefix}_RESIDENT_USERNAME`),
        password: ConfigUtils.get(`${prefix}_RESIDENT_PASSWORD`),
        displayName: ConfigUtils.get(`${prefix}_RESIDENT_NAME`),
        email: ConfigUtils.get(`${prefix}_RESIDENT_EMAIL`),
    },
} as const;