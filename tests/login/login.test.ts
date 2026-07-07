import { test } from '@playwright/test';

import { LoginController } from '@pages/login/controllers/LoginController';

test.describe('Login Module', () => {

    test('Verify admin user can login successfully', async ({ page }) => {

        const loginController = new LoginController(page);

        await loginController.login();

    });

    test('Verify resident user can login successfully', async ({ page }) => {

        const loginController = new LoginController(page);

        await loginController.loginAsResident();

    });

});
