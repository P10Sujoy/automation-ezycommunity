import { expect, Page } from '@playwright/test';
import { globalConfig } from '@configs/global-config';
import { LoginLocator } from '@pages/login/locators/LoginLocator';
import { Helper } from '@utils/Helper';

export class LoginController {
    private readonly loginLocator: LoginLocator;

    constructor(private readonly page: Page) {
        this.loginLocator = new LoginLocator(page);
    }

    /**
     * Login using Admin credentials.
     */
    public async login(): Promise<void> {
        await this.page.goto(globalConfig.baseUrl);

        await Helper.fill(this.loginLocator.usernameInput, globalConfig.admin.username);

        await Helper.fill(this.loginLocator.passwordInput, globalConfig.admin.password);

        await Helper.click(this.loginLocator.loginButton);

        await Helper.waitForPageLoad(this.page);

        // Verify successful login
        await expect(this.page).toHaveURL(/\/feeds$/);

        await expect(this.loginLocator.messageIcon).toBeVisible();
        await expect(this.loginLocator.messageIcon).toBeEnabled();

        await expect(this.loginLocator.notificationIcon).toBeVisible();
        await expect(this.loginLocator.notificationIcon).toBeEnabled();
    }

    /**
     * Login using Resident credentials.
     */
    public async loginAsResident(): Promise<void> {
        await this.page.goto(globalConfig.baseUrl);

        await Helper.fill(this.loginLocator.usernameInput, globalConfig.resident.username);

        await Helper.fill(this.loginLocator.passwordInput, globalConfig.resident.password);

        await Helper.click(this.loginLocator.loginButton);

        await Helper.waitForPageLoad(this.page);

        // Verify successful login
        await expect(this.page).toHaveURL(/\/feeds$/);

        await expect(this.loginLocator.messageIcon).toBeVisible();

        await expect(this.loginLocator.notificationIcon).toBeVisible();
        await Helper.wait(1000);
    }
}